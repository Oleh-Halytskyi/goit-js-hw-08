const throttle = require("lodash.throttle");

const emailRef = document.querySelector('input[name=email]');
const messageRef = document.querySelector('textarea[name=message]')
const formRef = document.querySelector(".feedback-form")
const saveInput = {
    email: '',
    message: '',
};
const LOCALSTORAGE_KEY = 'feedback-form-state';
const localStorageInput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

const throttleGetEmail = throttle(getEmail, 500)
const throttleGetMessage = throttle(getMessage, 500)

formRef.addEventListener("submit", handleSubmit);
emailRef.addEventListener('input', throttleGetEmail)
messageRef.addEventListener('input', throttleGetMessage)


function handleSubmit(event) {
    event.preventDefault();
    console.log(saveInput);
    formRef.reset()
    localStorage.clear()
}

function getEmail(evt) {
    const email = evt.target.value
    saveInput.email = email;
    const saveInputStringify = JSON.stringify(saveInput);
    localStorage.setItem(LOCALSTORAGE_KEY, saveInputStringify);
    
}

function getMessage(evt) {
    const message = evt.target.value;
    saveInput.message = message;
    
    const saveInputStringify = JSON.stringify(saveInput);
    localStorage.setItem(LOCALSTORAGE_KEY, saveInputStringify);
    
}

if (localStorageInput?.email) {
    emailRef.value = localStorageInput.email;
}
if (localStorageInput?.message) {
    messageRef.value = localStorageInput.message;
}
