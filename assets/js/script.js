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
        from_name: document.getElementById("Name").value,
        Email: document.getElementById("Email").value, // Assicurati che l'ID sia corretto e in minuscolo
        Profession: document.getElementById("Profession").value,
        Industry: document.getElementById("Industry").value,
        Message: document.getElementById("message").value // Assicurati che l'ID sia corretto e in minuscolo
    };

    emailjs.send("service_dvn88zd", "template_lkolvrw", params)
    .then(function(response) {
        alert("Success!" + response.status);
    }, function(error) {
        alert("Failed to send email: " + error);
    });
}


