var signInButton = document.getElementById('signIn');
var startButton = document.querySelectorAll('.pricing-section__button')[0];

//добавляет обработчик события на кнопку Sign In
signInButton.addEventListener('click', showModal);
startButton.addEventListener('click', showNotification);

function showModal(e) {
    document.body.classList.add('modal-open');
    modal.makeLayOut();
}

function showNotification(e) {
    notification.makeLayOut('notification', document.body);
}

//функция для создания элемента. Принимает три параметра: 1)элемент 2)класс 3)куда вставить элемент
function createNewElement(tagName, className, parentNode) {
    var element = document.createElement(tagName);
    element.className = className;
    if (parentNode) parentNode.appendChild(element);
    return element;
}


function PopupElement() {
    
}

//создает базовую общую разметку (генерит разметку в идеале)
PopupElement.prototype.makeLayOut = function (className, parentNode) {
    var element = createNewElement('div', className + ' popup', null);

    var closeButton = createNewElement('a', 'button-close', element);
    closeButton.href = '#';

    createNewElement('h2', className + '__title', element);
    createNewElement('div', className + '__content', element);

    parentNode.appendChild(element);
}

PopupElement.prototype.removeLayout = function () {
    this.remove();
}


function ModalWindow() {
    //расширяется метод родителя
    this.makeLayOut = function () {
        var modalWrapper = createNewElement('div', 'modal-backdrop', document.body);
        PopupElement.prototype.makeLayOut('modal-window', modalWrapper);
    }
}

//вынести в протоип методы, добавать наследование через object create

ModalWindow.prototype = Object.create(PopupElement.prototype);

var modal = new ModalWindow();

function Notification(type, title, message, delay) {
    PopupElement.apply(this)
}

Notification.prototype = Object.create(PopupElement.prototype);

var notification = new Notification('error', 'ERROR', 3000);
