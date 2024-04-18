document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.menu-hamburger');
    const menu = document.querySelector('.menu-hidden');

    hamburger.addEventListener('click', function() {
        // Toggle visibility of the menu
        menu.classList.toggle('visibile');
    });

    // Optional: Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove('visibile');
        }
    });

    // Prevent closing menu when clicking inside
    menu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
function SendMail() {
    var params = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        profession: document.getElementById("profession").value,
        industry: document.getElementById("industry").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_dvn88zd", "template_lkolvrw", params)
    .then(function(response) {
        alert("Success! Email sent, status: " + response.status);
        // Pulire il form dopo l'invio con successo
        document.getElementById("contact-form").reset();
    }, function(error) {
        alert("Failed to send email: " + error.text);
    });
}
