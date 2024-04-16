document.addEventListener('DOMContentLoaded', function() {
    // Seleziona il pulsante del menù a hamburger
    const hamburger = document.querySelector('.menu-hamburger');
    // Seleziona il menù
    const menu = document.querySelector('.menu-hidden');

    // Funzione per aprire/chiudere il menù
    function toggleMenu(event) {
        // Alterna la visibilità del menù
        menu.classList.toggle('visibile');
        event.stopPropagation(); // Impedisce che l'evento si propaghi al document
    }

    // Gestore di eventi per il clic sul menù a hamburger
    hamburger.addEventListener('click', toggleMenu);

    // Gestore di eventi per il clic sul document
    document.addEventListener('click', function(event) {
        // Se il menù è visibile e il clic non è sul menù o sul pulsante del menù
        if (menu.classList.contains('visibile') && !menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove('visibile'); // Nasconde il menù
        }
    });

    // Prevenire la chiusura del menù quando si clicca al suo interno
    menu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
