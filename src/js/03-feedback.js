const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormState = _.throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

emailInput.addEventListener('input', saveFormState);
messageInput.addEventListener('input', saveFormState);

const savedState = localStorage.getItem('feedback-form-state');
if (savedState) {
  const state = JSON.parse(savedState);
  emailInput.value = state.email;
  messageInput.value = state.message;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const state = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log(state);
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  });
  
