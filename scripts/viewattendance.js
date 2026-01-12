const storedData = localStorage.getItem('zaznamy');
    if (storedData) {
        zaznamy = JSON.parse(storedData);
    }

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

    aktualizovatTabulku();