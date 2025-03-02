document.addEventListener("DOMContentLoaded", function() {
    console.log("menu.js betöltve."); // Ellenőrzéshez

    activateDropdownMenu(); // Legördülő menü aktiválása
    activateButtonEffects(); // Kattintási effektek
});

// ======= Legördülő menü működése =======
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

// ======= Gombok kattintási effektje =======
function activateButtonEffects() {
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function() {
            // Minden más gomb alapállapotba kerül
            document.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));

            // Az éppen kattintott gomb aktív lesz
            this.classList.add("active");
        });
    });
}
