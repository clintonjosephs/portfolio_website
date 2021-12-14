let clientName = document.querySelector('#user_name');
let clientEmail = document.querySelector('#user_email');
let clientMessage = document.querySelector('#user_message');

function useLocalStorage() {
    let contactFormData = {
        name: clientName.value,
        email: clientEmail.value,
        message: clientMessage.value
    };
    localStorage.setItem('contactFormData', JSON.stringify(contactFormData));
}
const formInputs = document.querySelectorAll('input , textarea');
for (let j = 0; j < formInputs.length; j+=1) {
    formInputs[j].addEventListener('change', () => {
        useLocalStorage();
    });
}
let formData = JSON.parse(localStorage.getItem('contactFormData'));
clientName.value = formData.name;
clientEmail.value = formData.email;
clientMessage.value = formData.message;


