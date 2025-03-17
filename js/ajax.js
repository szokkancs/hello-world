document.addEventListener("DOMContentLoaded", function () {
    fetchData(); // Adatok betöltése az oldal megnyitásakor
});

const API_URL = "http://gamf.nhely.hu/ajax2/";
const CODE = "HI20V9abcd"; // Saját azonosító (Neptun + egyéni kód)

// 🔹 1. ADATOK LEKÉRÉSE ÉS MEGJELENÍTÉSE
function fetchData() {
    let formData = new FormData();
    formData.append("op", "read");
    formData.append("code", CODE);

    fetch(API_URL, {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        let tableBody = document.querySelector("#ajaxtable tbody");
        tableBody.innerHTML = ""; // Előző adatok törlése

        if (!data.list || data.list.length === 0) {
            tableBody.innerHTML = "<tr><td colspan='5'>Nincsenek adatok!</td></tr>";
            return;
        }

        data.list.forEach(record => {
            let row = `
                <tr>
                    <td>${record.id}</td>
                    <td>${record.name}</td>
                    <td>${record.height}</td>
                    <td>${record.weight}</td>
                    <td>
                        <button onclick="deleteData(${record.id})" class="delete-button">🗑️</button>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
        
    })
    .catch(error => {
        console.error("Hiba az adatok lekérésekor:", error);
        alert("Hiba történt az adatok lekérése közben!");
    });
}


// 🔹 2. ÚJ ADAT LÉTREHOZÁSA
function createData() {
    let name = document.getElementById("createName").value.trim();
    let height = document.getElementById("createHeight").value.trim();
    let weight = document.getElementById("createWeight").value.trim();

    if (name === "" || height === "" || weight === "") {
        alert("Minden mezőt ki kell tölteni!");
        return;
    }

    let formData = new FormData();
    formData.append("op", "create");
    formData.append("name", name);
    formData.append("height", height);
    formData.append("weight", weight);
    formData.append("code", CODE);

    fetch(API_URL, {
        method: "POST",
        body: formData
    })
    .then(response => response.text()) 
    .then(data => {
        let cleanedData = data.trim();
        console.log("🔹 API teljes válasz:", JSON.stringify(cleanedData)); // Debug

        if (cleanedData === "1") {  
            alert("✅ Sikeresen hozzáadva!");
            fetchData();
        } else {
            alert("❌ Hiba történt az adatok mentésekor! API válasz: " + cleanedData);
            console.error("❌ Ismeretlen API válasz:", cleanedData);
        }
    })
    .catch(error => {
        console.error("⚠️ Hiba:", error);
    });
}



// 🔹 3. ADAT MÓDOSÍTÁSA
function updateData() {
    let id = document.getElementById("updateId").value.trim();
    let name = document.getElementById("updateName").value.trim();
    let height = document.getElementById("updateHeight").value.trim();
    let weight = document.getElementById("updateWeight").value.trim();

    if (id === "" || name === "" || height === "" || weight === "") {
        alert("Minden mezőt ki kell tölteni!");
        return;
    }

    let formData = new FormData();
    formData.append("op", "update");
    formData.append("id", id);
    formData.append("name", name);
    formData.append("height", height);
    formData.append("weight", weight);
    formData.append("code", CODE);

    fetch(API_URL, {
        method: "POST",
        body: formData
    })
    .then(response => response.text()) // JSON helyett sima szöveg
    .then(data => {
        console.log("API válasz:", data);

        if (data.trim() === "1") {
            alert("Sikeres módosítás!");
            fetchData();
        } else {
            alert("Hiba történt a módosításkor!");
        }
    })
    .catch(error => console.error("Hiba:", error));
}


// 🔹 4. ADAT TÖRLÉSE
function deleteData(id) {
    if (!confirm("Biztosan törlöd az ID " + id + " rekordot?")) return;

    let formData = new FormData();
    formData.append("op", "delete");
    formData.append("id", id);
    formData.append("code", CODE);

    fetch(API_URL, {
        method: "POST",
        body: formData
    })
    .then(response => response.text()) // JSON helyett sima szöveg
    .then(data => {
        console.log("API válasz:", data);

        if (data.trim() === "1") {
            alert("Sikeresen törölve!");
            fetchData();
        } else {
            alert("Hiba történt a törléskor!");
        }
    })
    .catch(error => console.error("Hiba:", error));
}
function getDataForId() {
    let id = document.getElementById("updateId").value.trim();

    if (!id) {
        alert("Kérlek, adj meg egy ID-t a lekérdezéshez!");
        return;
    }

    let formData = new FormData();
    formData.append("op", "read");
    formData.append("code", CODE);

    fetch(API_URL, {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log("API válasz:", data); // Ellenőrzés

        if (!data.list || data.list.length === 0) {
            alert("Nincsenek elérhető adatok!");
            return;
        }

        let found = data.list.find(item => item.id == id);
        if (found) {
            document.getElementById("updateName").value = found.name;
            document.getElementById("updateHeight").value = found.height;
            document.getElementById("updateWeight").value = found.weight;
        } else {
            alert("Nem található ilyen ID!");
        }
    })
    .catch(error => {
        console.error("Lekérdezési hiba:", error);
        alert("Hiba történt az adatok lekérése közben!");
    });
}