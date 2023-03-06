//// ⚡ =========== Робочій варіант ('msg' & 'email') ========

import throttle from 'lodash.throttle';

const STORAGE_KEY_MSG = 'fdbk-msg';
const STORAGE_KEY_EMAIL = 'fdbk-email';

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[name="email"]'),
    textarea: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', onEmailAreaInput);
refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));
filledTextarea();
filledEmailarea();
savedData();

refs.form.addEventListener('input', throttle(e => {
    formData[e.target.name] = e.target.value;
}, 500)
)

function onEmailAreaInput(e) {
    const email = e.target.value;
    localStorage.setItem(STORAGE_KEY_EMAIL, email);
}

function onTextAreaInput(e) {
    const message = e.target.value;
    localStorage.setItem(STORAGE_KEY_MSG, message);
}

function onFormSubmit(e) {
    console.log(formData);
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY_EMAIL);
    localStorage.removeItem(STORAGE_KEY_MSG);
}

function savedData() {
    const storageData = localStorage.getItem(formData);
    if (storageData) {[e.target.name] = e.target.value}
}

function filledTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY_MSG);
 
    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
}

function filledEmailarea() {
    const savedMail = localStorage.getItem(STORAGE_KEY_EMAIL);
 
    if (savedMail) {
        refs.email.value = savedMail;
    }
}

//// 🤖 =========== Робочій варіант з 'msg' & 'email' ===============

// import throttle from 'lodash.throttle';

// const STORAGE_KEY_MSG = 'fdbk-msg';
// const STORAGE_KEY_EMAIL = 'fdbk-email';

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     email: document.querySelector('input[name="email"]'),
//     textarea: document.querySelector('textarea[name="message"]'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.email.addEventListener('input', onEmailAreaInput);
// refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));
// filledTextarea();
// filledEmailarea();

// function onEmailAreaInput(e) {
//     const email = e.target.value;
//     localStorage.setItem(STORAGE_KEY_EMAIL, email);
// }

// function onTextAreaInput(e) {
//     const message = e.target.value;
//     localStorage.setItem(STORAGE_KEY_MSG, message);
// }

// function onFormSubmit(e) {
//     e.preventDefault();
//     e.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY_EMAIL);
//     localStorage.removeItem(STORAGE_KEY_MSG);
// }

// function filledTextarea() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY_MSG);
 
//     if (savedMessage) {
//         refs.textarea.value = savedMessage;
//     }
// }

// function filledEmailarea() {
//     const savedMail = localStorage.getItem(STORAGE_KEY_EMAIL);
 
//     if (savedMail) {
//         refs.email.value = savedMail;
//     }
// }

//// 🤖 =========== Робочій варіант без 'email ===================
 
// import throttle from 'lodash.throttle';

// const STORAGE_KEY_MSG = 'fdbk-msg'

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     textarea: document.querySelector('textarea[name="message"]'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', onTextAreaInput);
// filledTextarea();

// function onTextAreaInput(e) {
//     const message = e.currentTarget.value;
//     localStorage.setItem(STORAGE_KEY, message);
// }

// function onFormSubmit(e) {
//     e.preventDefault();
//     e.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
// }

// function filledTextarea() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY);
 
//     if (savedMessage) {
//         refs.textarea.value = savedMessage;
//     }
// }