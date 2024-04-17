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
