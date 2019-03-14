var body = document.body;
var signInButton = document.getElementById('signIn');
var startButton = document.querySelectorAll('.pricing-section__button')[0];
// var srcroolbarWidth = body.offsetWidth - body.clientWidth;

scrollBarWidth = function() {
   var div = document.createElement('div');

   try {
       document.body.appendChild(div);
       return div.offsetWidth - div.clientWidth;
   }

   finally {
       div.remove();
   }
}

//добавляет обработчик события на кнопку Sign In
signInButton.addEventListener('click', showModal);
startButton.addEventListener('click', showNotification);

function showModal(e) {
    var modal = new ModalWindow();
    console.log(scrollBarWidth());
    body.style.paddingRight = scrollBarWidth() + 'px';
    modal.makeLayOut();
    
}

function showNotification(e) {
    notification.makeLayOut('notification', document.body);
}

//функция для создания элемента. Принимает три параметра: 1)элемент 2)класс 3)куда вставить элемент
function PopupElement(elementType) {
    var notification = new Notification('error', 'ERROR', 3000);
    notification.makeLayOut();
}

PopupElement.prototype.makeLayOut = function (className, parentNode) {
    var element = this.createNewElement('div', className + ' popup', null);

    var closeButton = this.createNewElement('div', 'popup__button-close', element);
    closeButton.addEventListener('click', this.removeLayout, false)

    this.createNewElement('h2', className + '__title', element);
    this.createNewElement('div', className + '__content', element);

    parentNode.appendChild(element);
}

PopupElement.prototype.removeLayout = function (e) {
    this.parentNode.remove();
}

PopupElement.prototype.createNewElement = function (tagName, className, parentNode) {
    var element = document.createElement(tagName);
    element.className = className;
    if (parentNode) parentNode.appendChild(element);
    return element;
}

function ModalWindow(title, content) {
    this.title = title;
    this.content = content;
}

ModalWindow.prototype = Object.create(PopupElement.prototype);

ModalWindow.prototype.makeLayOut = function () {
    var modalWrapper = this.createNewElement('div', 'modal-backdrop', document.body);
    PopupElement.prototype.makeLayOut.apply(this, ['modal-window', modalWrapper]);
    body.classList.toggle('modal-open');
}

ModalWindow.prototype.removeLayout = function (e) {
    this.parentNode.parentNode.remove();
    PopupElement.prototype.removeLayout.apply(this);
    body.classList.toggle('modal-open');
}

function Notification(type, title, message, delay) {
    this.type = type;
    this.title = title;
    this.message = message;
    this.delay = delay;
}

Notification.prototype = Object.create(PopupElement.prototype);