const clientName = document.querySelector('#user_name');
const clientEmail = document.querySelector('#user_email');
const clientMessage = document.querySelector('#user_message');

function useLocalStorage() {
  const contactFormData = {
    name: clientName.value,
    email: clientEmail.value,
    message: clientMessage.value,
  };
  localStorage.setItem('contactFormData', JSON.stringify(contactFormData));
}

const formInputs = document.querySelectorAll('input , textarea');
for (let j = 0; j < formInputs.length; j += 1) {
  formInputs[j].addEventListener('change', () => {
    useLocalStorage();
  });
}

const formData = JSON.parse(localStorage.getItem('contactFormData'));
if (formData !== null) {
  clientName.value = formData.name;
  clientEmail.value = formData.email;
  clientMessage.value = formData.message;
}
