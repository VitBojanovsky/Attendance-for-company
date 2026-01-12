let zaznamy = [];
const storedData = localStorage.getItem('zaznamy');
if (storedData) {
    zaznamy = JSON.parse(storedData);
}
//Draw the table as a form to allow to manually edit all files and also add a delete button to delete entire row
function nakreslitFormularSpravy() {
    const spravaDochazkyDiv = document.getElementById('spravaDochazky');
    let htmlFormulare = '<form id="spravaDochazkyForm"><table border="1"><tr><th>ID Zaměstnance</th><th>Datum</th><th>Stav</th><th>Akce</th></tr>';
    for (let i = 0; i < zaznamy.length; i++) {
        htmlFormulare += `<tr>
            <td><input type="text" name="idZamestnance" value="${zaznamy[i].idZamestnance}"></td>
            <td><input type="date" name="datum" value="${zaznamy[i].datum}"></td>
            <td><input type="text" name="stav" value="${zaznamy[i].stav}"></td>
            <td><button type="button" class="smazatZaznam" data-index="${i}">Smazat</button></td>
        </tr>`;
    }
    htmlFormulare += '</table><button type="submit">Uložit změny</button></form><button type="button" id="pridatZaznam">Přidat záznam</button>';
    spravaDochazkyDiv.innerHTML = htmlFormulare;

    const spravaDochazkyForm = document.getElementById('spravaDochazkyForm');  
    spravaDochazkyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(spravaDochazkyForm);
        const noveZaznamy = [];
        for (let i = 0; i < zaznamy.length; i++) {
            const idZamestnance = formData.getAll('idZamestnance')[i];
            const datum = formData.getAll('datum')[i];
            const stav = formData.getAll('stav')[i];
            noveZaznamy.push({ idZamestnance, datum, stav });
        }
        zaznamy = noveZaznamy;
        localStorage.setItem('zaznamy', JSON.stringify(zaznamy));
        alert('Změny uloženy!');
        nakreslitFormularSpravy();
    });

    const smazatTlacitka = document.querySelectorAll('.smazatZaznam');
    smazatTlacitka.forEach(function(tlacitko) {
        tlacitko.addEventListener('click', function() {
            const index = parseInt(tlacitko.getAttribute('data-index'));
            zaznamy.splice(index, 1);
            localStorage.setItem('zaznamy', JSON.stringify(zaznamy));
            alert('Záznam smazán!');
            nakreslitFormularSpravy();
        });
    });

    const pridatZaznamTlacitko = document.getElementById('pridatZaznam');
    pridatZaznamTlacitko.addEventListener('click', function() {
        zaznamy.push({ idZamestnance: '', datum: '', stav: '' });
        localStorage.setItem('zaznamy', JSON.stringify(zaznamy));
        nakreslitFormularSpravy();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    nakreslitFormularSpravy();
});
