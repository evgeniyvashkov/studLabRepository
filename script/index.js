function CreateElement() {

}

//для показа блока
CreateElement.prototype.show = function () {
    document.body.appendChild(this.element);  
}

//для скрытия блока
CreateElement.prototype.hide = function () {

}

//создает базовую общую разметку (генерит разметку в идеале)
CreateElement.prototype.makeLayOut = function (className) {
    var element = document.createElement('div');
    var closeButton = document.createElement('a');
    closeButton.href='#';
    element.className = className + '__content';
    closeButton.className = 'button-close';
    element.appendChild(closeButton);
    return element;
}


//вынести в протоип методы, добавать наследование через object create
function ModalWindow() {
    var content = this.makeLayOut('modal-window');

    //создает блок для модального окна
    var modalWindow = document.createElement('div');
    modalWindow.className='modal-window';
    
    //добавлет контент модального окна
    modalWindow.appendChild(content);

    //текст модального окна
    var modalWindowText = document.createElement('div');
    modalWindowText.className = 'modal-window__text';
    content.appendChild(modalWindowText);

    this.element = modalWindow;
}

 ModalWindow.prototype = CreateElement.prototype;//bad

//аналогично модалке
function Notification(type, title, text) {
    var container = this.makeLayOut('notification');
    //добавляется уточняющий класс
    container.classList.add('notification_' + type);

    var title = document.createElement('div');
    title.className = 'notification__title';
    container.appendChild(title);

    var message = document.createElement('div');
    message.className = 'notification__message';
    message.innerHTML = text;
    container.appendChild(message);

    this.element = container;
}

Notification.prototype = CreateElement.prototype;//bad


var modal = new ModalWindow();

var notification = new Notification('error', 'ERROR', 'operation failed');

// var modalWindow = document.getElementById('modal');
var signInButton = document.getElementById('signIn');
var modalClose = document.getElementById('modal-close');

signInButton.addEventListener('click', showModal);

// modalClose.addEventListener('click', closeModal);

function showModal(e) {
    document.body.classList.add('modal-open');
    modal.show();
}

function closeModal(e) {
    e.preventDefault();
    document.body.appendChild(notification.element);
    document.body.classList.remove('modal-open');
    modal.close(); 
}

