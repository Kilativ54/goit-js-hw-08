import throttle from 'lodash.throttle';
const formSubmit = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageTextare = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';
formSubmit.addEventListener(
  'input',
  throttle(
    e =>
      localStorage.setItem(
        LOCALSTORAGE_KEY,
        JSON.stringify({
          email: emailInput.value,
          message: messageTextare.value,
        })
      ),
    500
  )
);

formSubmit.addEventListener('submit', submStorage);
function submStorage(e) {
  e.preventDefault();
  console.log({ email: emailInput.value, message: messageTextare.value });
  formSubmit.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageData = load(LOCALSTORAGE_KEY);
if (storageData) {
  emailInput.value = storageData.email;
  messageTextare.value = storageData.message;
}
