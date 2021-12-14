const form = document.querySelector('.contact-form');
const EMAIL_LOWERCASE = 'Please email should be lowercase characters *';

function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('span');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function validateEmail(input, invalidMsg) {
  const email = input.value.trim();
  if (email !== email.toLowerCase()) {
    return showError(input, invalidMsg);
  }
  return true;
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(form.elements.user_email, EMAIL_LOWERCASE);
  if (emailValid) {
    form.submit();
    form.reset();
  }
});