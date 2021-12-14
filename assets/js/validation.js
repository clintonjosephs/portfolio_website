const form = document.querySelector('.contact-form');
const EMAIL_LOWERCASE = "Please email should be lowercase characters *";


function showMessage(input, message, type) {
	const msg = input.parentNode.querySelector("span");
	msg.innerText = message;
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}