document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".js--class");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let valid = true;

        const name = form.querySelector('input[name="name"]');
        const message = form.querySelector('textarea[name="message"]');
        const phone = form.querySelector('input[name="tel"]');     
        const phoneRegex = /^\+380\d{9}$/;
        const email = form.querySelector('input[name="email"]');
        const emailRegex = /.*@.*\..*/;
        const adress = form.querySelector('input[name="adress"]')

        if (name.value.trim() === '') {
            alert("Імʼя - обовʼязкове поле");
            valid = false;
        }
        if (message.value.trim().length < 5) {
            alert("Повідомлення має містити не менше 5-ти символів");
            valid = false;
        }
        if (!phoneRegex.test(phone.value)) {
            alert("Номер телефону має містити код +380");
            valid = false;
        }
        if (!emailRegex.test(email.value)) {
            alert("Неможлива електронна адреса");
            valid = false;
        }
        if (adress.value.trim() === '') {
            alert("Не вказана адреса");
            valid = false;
        }
        if (valid) {
            console.log("Name: " + name.value);
            console.log("Message: " + message.value);
            console.log("Phone number: " + phone.value);
            console.log("Email: " + email.value);
            console.log("Address: " + adress.value);
        }
    });
});
