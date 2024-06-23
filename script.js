function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'demo');
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        formResponse.textContent = `Thank you, ${name}. We have received your message: "${message}". We will respond to you at ${email}.`;
        contactForm.reset();
    });
});
