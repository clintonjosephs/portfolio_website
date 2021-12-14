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