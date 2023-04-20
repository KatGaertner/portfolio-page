(function() {
    const form = document.getElementById('contact-form');
    const emailInput = document.getElementById('contact-email');
    const nameInput = document.getElementById('contact-name');
    const messageInput = document.getElementById('contact-message');

    function showErrorMessage(field, message) {
        let container = field.parentElement;

        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }

        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateRequired(field, name) {
        let value = field.value;
        if (!value) {
            showErrorMessage(field, `${name} is required.`);
            return false;
        }
        return true;
    }

    function validateName() {
        if (!validateRequired(nameInput, 'Name')) {
            return false;
        }
        showErrorMessage(nameInput, null);
        return true;
    }

    function validateMessage() {
        if (!validateRequired(messageInput, 'Message')) {
            return false;
        }
        showErrorMessage(messageInput, null);
        return true;
    }

    function validateEmail() {
        if (!validateRequired(emailInput, 'E-mail')) {
            return false;
        }

        let value = emailInput.value;
        let hasAtSign = value.indexOf('@') > -1;
        let hasDot =  value.indexOf('.') > -1;
        let hasDomain = value.length - value.indexOf('.') > 2; // needs a real top-level domain
        if (!hasAtSign || !hasDot || !hasDomain) {
            showErrorMessage(emailInput, 'Please enter a valid email address.');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }

    function validateForm() {
        let isValidEmail = validateEmail();
        let isValidName = validateName();
        let isValidMessage = validateMessage();
        return isValidEmail && isValidName && isValidMessage;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // don't submit
        if (validateForm()) {
            console.log('Success');
        }
    });

    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);
})();
