import './pop-up.css'
import './modal-window.css'
import './notification.css'

var body = document.body;

//По клику создается lauout для модального окна и добавляюся стили для фиксированого body
//также добавляется паддинг для хередра и боди равный ширине скрол бара
function showModal(e) {
    var modal = new ModalWindow('Modal Title text', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur tenetur, tempore laborum consequuntur suscipit cum distinctio itaque quas delectus qui, odit enim eius blanditiis commodi! Dolorem totam, corporis veniam corrupti quis magnam non tenetur, vitae ipsam reiciendis doloribus eligendi, ab quo! Esse aliquid incidunt error possimus temporibus ipsum unde!');
    modal.makeLayOut();
}

//по клику создает уведомление и вызывает функцию удаления через заданную задержку
function showNotification(e) {
    //так как обработчик событий всеит на секции, по клику смотрю какой класс у e.targetParent и в зависимости от этого 
    //генерирую различные уведомления
    var pricingSectionContent = document.getElementsByClassName('pricing-section__content')[0];
    var targetElement = e.target;

    if (targetElement.classList.contains('pricing-section__button')) {
        var notificationType = targetElement.parentNode.classList[1];

        switch (notificationType) {
            case 'free': {
                var notification = new Notification('error', 'ERROR', 'Try again', 5000);
                break;
            }

            case 'professional': {
                var notification = new Notification('success', 'successful', 'Congratulation!', 5000);
                break;
            }

            case 'business': {
                var notification = new Notification('warning', 'warning', 'Сheck you mail', 5000);
                break;
            }

            case 'business+': {
                var notification = new Notification('info', 'Information', 'For business partners only', 5000);
                break;
            }
        }

        notification.makeLayOut();
    };
}

//Родительский элемент в прототипе которого описаны основные методы
function PopupElement(title, content) {
    this.title = title;
    this.content = content;
}

//генерирует layout для popup элемента
PopupElement.prototype.makeLayOut = function (className, parentNode, title, content, type) {
    var self = this;
    var type = type || '';
    var element = this.createNewElement('div', className + ' popup ' + type, null, null);
    var closeButton = this.createNewElement('div', 'popup__button-close', element, null);

    closeButton.addEventListener('click', self.removeLayout.bind(self, closeButton), false);

    this.createNewElement('h2', className + '__title', element, title, null);
    this.createNewElement('div', className + '__content', element, content);

    parentNode.appendChild(element);
}

//удаление блока popup по клику на кнопку закрыть 
PopupElement.prototype.removeLayout = function (closeButton) {
    closeButton.parentNode.remove();
}

//Вспомагательный метод для: создания нового элемента, добавления ему класса, контента и место куда его
PopupElement.prototype.createNewElement = function (tagName, className, parentNode, content) {
    var element = document.createElement(tagName);

    element.className = className;
    element.textContent = content;

    if (parentNode) parentNode.appendChild(element);

    return element;
}

//Функция-консруктор для создания новых модальных окон
function ModalWindow(title, content) {
    PopupElement.apply(this, arguments);
}

//Устанавливается наследование от компонента Popup
ModalWindow.prototype = Object.create(PopupElement.prototype);
ModalWindow.prototype.constructor = ModalWindow;

//Расширение родительского метода makeLayout 
ModalWindow.prototype.makeLayOut = function () {
    var header = document.getElementsByClassName('header')[0];
    var _self = this;//сохраняю контекст
    var paddingRight = this.checkSrollWidth();
    var modalWrapper = this.createNewElement('div', 'modal-backdrop', document.body, null);

    PopupElement.prototype.makeLayOut.apply(this, [
        'modal-window',
        modalWrapper,
        this.title,
        this.content
    ]);

    body.classList.add('modal-open');
    body.style.paddingRight = paddingRight + 'px';
    header.style.paddingRight = paddingRight + 'px';

    //По клику затемненной области модального окна закрывает окно
    modalWrapper.addEventListener('click', function (event) {
        if (event.target === this) {

            this.remove();
            _self.clearBodyStyles();
        }
    });
}

//Расширение родительского метода removeLayout 
ModalWindow.prototype.removeLayout = function (closeButton) {
    PopupElement.prototype.removeLayout.apply(this, arguments);
    document.getElementsByClassName('modal-backdrop')[0].remove();
    this.clearBodyStyles();
}

//Метод для удаление стилей для body при закрытии модального окна
ModalWindow.prototype.clearBodyStyles = function () {
    var header = document.getElementsByClassName('header')[0];

    body.classList.remove('modal-open');
    body.removeAttribute('style');
    header.removeAttribute('style');
}

//Метод для определения ширины скрола
ModalWindow.prototype.checkSrollWidth = function () {
    return parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth);
}

//Функция конструктор для создания уведомлений
function Notification(type, title, content, delay) {
    PopupElement.apply(this, arguments);
    this.type = type;
    this.delay = delay;
}

Notification.prototype = Object.create(PopupElement.prototype);
Notification.prototype.constructor = Notification;

Notification.prototype.makeLayOut = function () {
    var notificationWrapper = document.getElementsByClassName('notification-wrapper')[0] || this.createNewElement('div', 'notification-wrapper', body, null);

    PopupElement.prototype.makeLayOut.apply(this, [
        'notification',
        notificationWrapper,
        this.title,
        this.content,
        this.type
    ]);

    this.autoHide();
}

//метод для автоматического закрытия уведомлений
Notification.prototype.autoHide = function () {
    setTimeout(function () {
        var notificationItem = document.getElementsByClassName('notification')[0];

        if (notificationItem) {
            notificationItem.remove();
        }

    }, this.delay);
}


export  {showModal, showNotification};