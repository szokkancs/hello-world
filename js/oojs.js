class EgyetemiDolgozo {
    constructor(nev, cim, fizetes) {
        this.nev = nev;
        this.cim = cim;
        this.fizetes = fizetes;
    }
    
    fizetesModosit(emeles) {
        this.fizetes += emeles;
    }
}

class Tanar extends EgyetemiDolgozo {
    constructor(nev, cim, fizetes, tanszek) {
        super(nev, cim, fizetes);
        this.tanszek = tanszek;
        this.tantargyak = [];
    }
    
    tantargy(tantargy) {
        this.tantargyak.push(tantargy);
    }
    tantargyakSzama() {
        return this.tantargyak.length;
    }
}

function frissitTabla(tbodyId, adatok) {
    const tabla = document.getElementById(tbodyId);
    tabla.innerHTML = "";
    adatok.forEach((obj) => {
        const sor = `<tr>
            <td>${obj.nev}</td>
            <td>${obj.cim}</td>
            <td>${obj.fizetes}</td>
            <td>${obj.tanszek || "---"}</td>
            <td>${obj.tantargyak ? obj.tantargyakSzama() + ": " + obj.tantargyak.join(", ") : "---"}</td>
        </tr>`;
        tabla.innerHTML += sor;
    });
}

var objects = [];
objects.push(new EgyetemiDolgozo('Kovács Melinda', 'Budapest', 250000));
objects.push(new Tanar('Kovács Izabella', 'Kecskemét', 300000, 'Informatika'));
objects.push(new Tanar('Szabó Péter', 'Szeged', 275000, 'Gépész'));

window.onload = function() {
    frissitTabla("oojsKezdoTabla", objects);

    objects[0].fizetesModosit(50000);
    objects[2].fizetesModosit(25000);
    objects[1].tantargy("Programozás I");
    objects[1].tantargy("Programozás II");
    objects[1].tantargy("Vizuális programozás");
    objects[2].tantargy("Web-programozás I");
    objects[2].tantargy("Web-programozás II");

    frissitTabla("oojsModositottTabla", objects);
};
