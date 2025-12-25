let zaznamy = [];

document.addEventListener('DOMContentLoaded', function() {
    const formularDochazky = document.getElementById('formularDochazky');
    formularDochazky.addEventListener('submit', function(event) {
        event.preventDefault();
        const idZamestnance = document.getElementById('idZamestnance').value;
        const datum = document.getElementById('datum').value;
        const stavTemp = document.getElementById('stav').value;
        console.log(`Employee ID: ${idZamestnance}, Date: ${datum}, Status: ${stavTemp}`);
        zaznamy.push({ idZamestnance, datum, stav: stavTemp });

        alert('Docházka zaznamenána!');
        formularDochazky.reset();

        aktualizovatTabulku();
    });

    function aktualizovatTabulku() {
        const tabulkaDochazky = document.querySelector('.tabulka-dochazky');
        if (tabulkaDochazky) {
            let htmlTabulky = '<table border="1"><tr><th>ID Zaměstnance</th><th>Datum</th><th>Stav</th></tr>';
            for (let zaznam of zaznamy) {
                htmlTabulky += `<tr><td>${zaznam.idZamestnance}</td><td>${zaznam.datum}</td><td>${zaznam.stav}</td></tr>`;
            }
            htmlTabulky += '</table>';
            tabulkaDochazky.innerHTML = htmlTabulky;
        }
    }

    // Initial table display
    aktualizovatTabulku();
});