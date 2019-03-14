var body = document.body;
var signInButton = document.getElementById('signIn');
var startButton = document.querySelectorAll('.pricing-section__button')[0];
var header = document.querySelectorAll('.header')[0];

signInButton.addEventListener('click', showModal);
startButton.addEventListener('click', showNotification);

function showModal(e) {
    var modal = new ModalWindow();
    var paddingRight = modal.checkSrollWidth();
    body.style.paddingRight = paddingRight + 'px';
    header.style.paddingRight = paddingRight + 'px';
    modal.makeLayOut();
}

function showNotification(e) {
    var notification = new Notification('error', 'ERROR', 'Try again', 22000);
    notification.makeLayOut();

    setTimeout(function () {
        document.querySelectorAll('.notification')[0].remove();
    }, notification.delay);
}

function PopupElement() { }

PopupElement.prototype.makeLayOut = function (className, parentNode, title, content) {
    var element = this.createNewElement('div', className + ' popup', null);

    var closeButton = this.createNewElement('div', 'popup__button-close', element);
    closeButton.addEventListener('click', this.removeLayout, false)

    
    this.createNewElement('h2', className + '__title', element, 'TEXT MATHER');
    this.createNewElement('div', className + '__content', element);
    
    parentNode.appendChild(element);
}

PopupElement.prototype.removeLayout = function () {
    this.parentNode.remove();
}

PopupElement.prototype.createNewElement = function (tagName, className, parentNode, content) {
    var element = document.createElement(tagName);
    element.className = className;
    
    element.innerHtml = content;
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
    modalWrapper.addEventListener('click', function (event) {
        if (event.target === this) {
            this.remove();
            ModalWindow.prototype.clearBodySyles();
        }
    });
    PopupElement.prototype.makeLayOut.apply(this, ['modal-window', modalWrapper, title]);
    body.classList.toggle('modal-open');
}

ModalWindow.prototype.removeLayout = function () {
    this.parentNode.parentNode.remove();
    PopupElement.prototype.removeLayout.apply(this);
    ModalWindow.prototype.clearBodySyles();
}

ModalWindow.prototype.clearBodySyles = function () {
    body.classList.toggle('modal-open');
    body.removeAttribute('style');
    header.removeAttribute('style');
}

ModalWindow.prototype.checkSrollWidth = function () {
    
    var div = document.createElement('div');
    document.body.appendChild(div);
    var srcroolbarWidth = window.innerWidth - div.clientWidth;
    console.log(srcroolbarWidth)
    div.remove();
    return srcroolbarWidth;
}

function Notification(type, title, message, delay) {
    this.type = type;
    this.title = title;
    this.message = message;
    this.delay = delay;
}

Notification.prototype = Object.create(PopupElement.prototype);

Notification.prototype.makeLayOut = function () {
    PopupElement.prototype.makeLayOut.apply(this, ['notification', document.body, this.title]);
    console.log(this)
}
