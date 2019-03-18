var body = document.body;
var signInButton = document.getElementById('signIn');
var signUpButton = document.getElementById('signUp');
var header = document.querySelector('.header');
var pricingSectionContent = document.querySelector('.pricing-section__content');

//до
signInButton.addEventListener('click', showModal);
signUpButton.addEventListener('click', showModal);
pricingSectionContent.addEventListener('click', showNotification);

//По клику создается lauout для модального окна и добавляюся стили для фиксированого body
//также добавляется паддинг для хередра и боди равный ширине скрол бара
function showModal(e) {
    var modal = new ModalWindow('Modal Title text', '');
    modal.makeLayOut();
}


//по клику создает уведомление и вызывает функцию удаления через заданную задержку
function showNotification(e) {
    //так как обработчик событий всеит на секции, по клику смотрю какой класс у e.targetParent и в зависимости от этого 
    //генерирую различные уведомления
    if (e.target.className === 'pricing-section__button') {
        var notificationType = e.target.parentNode.classList[1];

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

        //todo возможно есть более "элегантное" решение, надо подумать/поискать
        setTimeout(function () {
            var notificationItem = document.querySelectorAll('.notification')[0];
            if (notificationItem) notificationItem.remove();
        }, notification.delay);
    };
}

//Родительский элемент в прототипе которого описаны основные методы
function PopupElement() { }

//генерирует layout для popup элемента
PopupElement.prototype.makeLayOut = function (className, parentNode, title, content, type) {
    var type = type || '';
    var element = this.createNewElement('div', className + ' popup ' + type, null, null);

    var closeButton = this.createNewElement('div', 'popup__button-close', element, null);
    closeButton.addEventListener('click', this.removeLayout, false)

    this.createNewElement('h2', className + '__title', element, title, null);
    this.createNewElement('div', className + '__content', element, content);

    parentNode.appendChild(element);
}

//удаление блока popup по клику на кнопку закрыть 
PopupElement.prototype.removeLayout = function () {
    this.parentNode.remove();
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
    this.title = title;
    this.content = content;
}

//Устанавливается наследование от компонента Popup
ModalWindow.prototype = Object.create(PopupElement.prototype);

//Расширение родительского метода makeLayout 
ModalWindow.prototype.makeLayOut = function () {
    var paddingRight = ModalWindow.prototype.checkSrollWidth.apply(this, []);
    var modalWrapper = this.createNewElement('div', 'modal-backdrop', document.body, null);

    PopupElement.prototype.makeLayOut.apply(this, [
        'modal-window',
        modalWrapper,
        this.title,
        this.content
    ]);

    body.classList.toggle('modal-open');
    body.style.paddingRight = paddingRight + 'px';
    header.style.paddingRight = paddingRight + 'px';

    //По клику затемненной области модального окна закрывает окно
    modalWrapper.addEventListener('click', function (event) {
        if (event.target === this) {
            ModalWindow.prototype.clearBodySyles();
            this.remove();
        }
    });
}

//Расширение родительского метода removeLayout 
ModalWindow.prototype.removeLayout = function () {
    PopupElement.prototype.removeLayout.apply(this, []);
    ModalWindow.prototype.clearBodySyles.apply(this, [])

    document.querySelector('.modal-backdrop').remove();
}

//Метод для удаление стилей для body при закрытии модального окна
ModalWindow.prototype.clearBodySyles = function () {
    body.classList.toggle('modal-open');
    body.removeAttribute('style');
    header.removeAttribute('style');
}

//Метод для определения ширины скрола 
ModalWindow.prototype.checkSrollWidth = function () {
    var div = document.createElement('div');
    document.body.appendChild(div);
    var srcroolbarWidth = window.innerWidth - div.clientWidth;
    div.remove();
    return srcroolbarWidth;
}

//Функция конструктор для создания уведомлений
function Notification(type, title, message, delay) {
    this.type = type;
    this.title = title;
    this.message = message;
    this.delay = delay;
}

Notification.prototype = Object.create(PopupElement.prototype);

Notification.prototype.makeLayOut = function () {
    var notificationWrapper = document.querySelector('.notification-wrapper') || PopupElement.prototype.createNewElement('div', 'notification-wrapper', body);

    PopupElement.prototype.makeLayOut.apply(this, [
        'notification',
        notificationWrapper,
        this.title,
        this.message,
        this.type
    ]);
}
