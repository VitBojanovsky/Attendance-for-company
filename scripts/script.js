let zaznamy = [];


document.addEventListener('DOMContentLoaded', function() {
    const storedData = localStorage.getItem('zaznamy');
    if (storedData) {
        zaznamy = JSON.parse(storedData);
    }

    const formularDochazky = document.getElementById('formularDochazky');
    formularDochazky.addEventListener('submit', function(event) {
        event.preventDefault();

        const idZamestnance = document.getElementById('idZamestnance').value;
        const datum = document.getElementById('datum').value;
        const stavTemp = document.getElementById('stav').value;

        zaznamy.push({ idZamestnance, datum, stav: stavTemp });


        localStorage.setItem('zaznamy', JSON.stringify(zaznamy));

        alert('Docházka zaznamenána!');
        formularDochazky.reset();

        
    });

    
});
