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
function PopupElement(elementType) {

}

PopupElement.prototype.makeLayOut = function (className, parentNode) {
    var element = this.createNewElement('div', className + ' popup', null);

    var closeButton = this.createNewElement('a', 'popup__button-close', element);
    closeButton.href = '#';
    closeButton.addEventListener('click', PopupElement.prototype.removeLayout, false)

    this.createNewElement('h2', className + '__title', element);
    this.createNewElement('div', className + '__content', element);

    parentNode.appendChild(element);
}

PopupElement.prototype.removeLayout = function (e) {
   e.preventDefault();
    console.log(this.parentNode);
    console.dir(this.parentNode.parentNode);
    this.parentNode.parentNode.remove();
    this.parentNode.remove();
    
}

PopupElement.prototype.createNewElement = function (tagName, className, parentNode) {
    var element = document.createElement(tagName);
    element.className = className;
    if (parentNode) parentNode.appendChild(element);
    return element;
}


function ModalWindow() {
    
}

ModalWindow.prototype = Object.create(PopupElement.prototype);

ModalWindow.prototype.makeLayOut = function () {
    var modalWrapper = this.createNewElement('div', 'modal-backdrop', document.body);
    PopupElement.prototype.makeLayOut.apply(this, ['modal-window', modalWrapper]);
}



function Notification(type, title, message, delay) {
    this.type = type;
    this.title = title;
    this.message = message;
    this.delay = delay;
}

Notification.prototype = Object.create(PopupElement.prototype);

var modal = new ModalWindow();
var notification = new Notification('error', 'ERROR', 3000);

console.log(modal.elementType);
console.log(modal.buttonClose);

console.log(notification.elementType);
console.log(notification.buttonClose);