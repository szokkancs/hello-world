document.addEventListener("DOMContentLoaded", function() {
    fetch("HTML5Menu.html") // Betöltjük a menü HTML fájlt
    .then(response => response.text()) // A HTML tartalmat szöveggé alakítjuk
    .then(data => {
        document.getElementById("html5MenuContainer").innerHTML = data; // Beillesztjük az oldalba
        activateDropdownMenu(); // Meghívjuk a dropdown funkciókat
    })
    .catch(error => console.error("Hiba a menü betöltésekor:", error));

    function activateDropdownMenu() {
        let dropdown = document.querySelector(".dropdown");
        let dropdownContent = document.querySelector(".dropdown-content");

        if (dropdown && dropdownContent) {
            dropdown.addEventListener("mouseenter", function() {
                dropdownContent.style.display = "block";
            });

            dropdown.addEventListener("mouseleave", function() {
                dropdownContent.style.display = "none";
            });
        }
    }
});
