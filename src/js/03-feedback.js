const throttle = require("lodash.throttle");

const emailRef = document.querySelector('input[name=email]');
const messageRef = document.querySelector('textarea[name=message]')
const formRef = document.querySelector(".feedback-form")
const saveInput = {
    email: "",
    message: "",
};
const LOCALSTORAGE_KEY = 'feedback-form-state';
const localStorageInput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

if (JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))) {
    saveInput.email = localStorageInput.email;
    saveInput.message = localStorageInput.message;
}

const throttleGetEmail = throttle(getEmail, 500)
const throttleGetMessage = throttle(getMessage, 500)

formRef.addEventListener("submit", handleSubmit);
emailRef.addEventListener('input', throttleGetEmail);
messageRef.addEventListener('input', throttleGetMessage);

function handleSubmit(event) {
    event.preventDefault();
    console.log(saveInput);
    formRef.reset()
    localStorage.removeItem(LOCALSTORAGE_KEY)
}


function getEmail(evt) {
    saveInput.email = evt.target.value;    
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(saveInput));  

}

function getMessage(evt) {
    saveInput.message = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(saveInput));
}

if (localStorageInput?.email) {
    emailRef.value = localStorageInput.email;
}
if (localStorageInput?.message) {
    messageRef.value = localStorageInput.message;

}
