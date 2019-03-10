var body = document.querySelectorAll('body')[0];
var modalWindow = document.getElementById('modal');
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

///show toastNotification
function createToastNotification(type, text) {
    //create notification container
    var toastContainer = document.createElement('div');
    toastContainer.className = 'toast-notification ' + type;

     //create notification child for icon
    var toastIcon = document.createElement('div');
    toastIcon.classList.add('toast-notification__icon');

    //create notification child for message
    var toastMessage = document.createElement('div');
    toastMessage.classList.add('toast-notification__messge');

    //add icon and message blcoks into container
    toastContainer.appendChild(toastIcon);
    toastContainer.appendChild(toastMessage);

    toastMessage.innerHTML = text;

    //add notification into body
    body.appendChild(toastContainer);

    //remove notification
    setTimeout(function () {
        toastContainer.remove();
    }, 2000);
}
//todo подумать как размевить один обработчик на всю секцию а не на каждую  кнопку
var startButton = document.querySelectorAll('.pricing-section__button')[0];
startButton.addEventListener('click', createToastNotification);
