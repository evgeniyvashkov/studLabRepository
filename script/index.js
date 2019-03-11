var body = document.querySelectorAll('body')[0];
// var modalWindow = document.getElementById('modal');
var signInButton = document.getElementById('signIn');
var modalClose = document.getElementById('modal-close');

signInButton.addEventListener('click', showModal);

modalClose.addEventListener('click', closeModal);

function showModal(e) {
    body.classList.add('modal-open');
    modalWindow.classList.add('modal-window_show');
}

function closeModal(e) {
    e.preventDefault();
    body.classList.remove('modal-open');
    modalWindow.classList.remove('modal-window_show');
}

// //todo подумать как размевить один обработчик на всю секцию а не на каждую  кнопку
// var startButton = document.querySelectorAll('.pricing-section__button')[0];
// startButton.addEventListener("click", createToastNotification);

//для чего?
function CreateElement(name) {

}
//для показа блока
CreateElement.prototype.show = function () {
    // this.style.display = "block";
    console.log('show');
}

//для скрытия блока
CreateElement.prototype.hide = function () {
    // this.style.display = "none";
    console.log('hide');
}

//создает базовую общую разметку
CreateElement.prototype.makeLayOut = function (className) {
    var element = document.createElement('div');
    var closeButton = document.createElement('div')
    element.className = className + "__content";
    closeButton.className = className + '__close';
    element.appendChild(closeButton);
    return element;
}

function ModalWindow() {
    var content = this.makeLayOut('modal-window');

    //создает блок для модального окна
    var modalWindow = document.createElement('div');
    modalWindow.className="modal-window";
    
    //добавляет подложку
    var modalWindowBackdrop = document.createElement('div');
    modalWindowBackdrop.className = "modal-window__backdrop";
    modalWindow.appendChild(modalWindowBackdrop);

    //добавлет контент модального окна
    modalWindow.appendChild(content);

    //текст модального окна
    var modalWindowText = document.createElement('div');
    modalWindowText.className = "modal-window__text";
    content.appendChild(modalWindowText);

    this.element = modalWindow;
}

ModalWindow.prototype = CreateElement.prototype;

function Notification(type, title, text) {
    var container = this.makeLayOut('notification');
    //добавляется уточняющий класс
    container.classList.add('notification_' + type);

    var title = document.createElement('div');
    title.className = "notification__title";
    container.appendChild(title);

    var message = document.createElement('div');
    message.className = "notification__message";
    message.innerHTML = text;
    container.appendChild(message);

    this.element = container;
}

Notification.prototype = CreateElement.prototype;


var modal = new ModalWindow();

var notification = new Notification('error', 'ERROR', "operation failed");

//для тесте добавляю в разметку блоки
document.querySelectorAll('body')[0].appendChild(modal.element);
document.querySelectorAll('body')[0].appendChild(notification.element);

