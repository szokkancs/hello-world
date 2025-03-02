document.addEventListener("DOMContentLoaded", function () {
    activateDropdownMenu(); // Legördülő menü aktiválása
    activateButtonEffects(); // Kattintási effektek
});

// ======= Legördülő menü működése =======
function activateDropdownMenu() {
    let dropdown = document.querySelector(".dropdown");
    let dropdownContent = document.querySelector(".dropdown-content");

    if (dropdown && dropdownContent) {
        // Ha az egér rámegy, a menü nyitva marad
        dropdown.addEventListener("mouseenter", function () {
            dropdownContent.style.display = "block";
        });

        // Ha az egér elhagyja a menüt, akkor bezáródik
        dropdown.addEventListener("mouseleave", function () {
            dropdownContent.style.display = "none";
        });

        // Ha egy menüpontra kattintunk, a menü bezáródik
        dropdownContent.querySelectorAll("a").forEach(item => {
            item.addEventListener("click", function () {
                dropdownContent.style.display = "none"; // Bezárja a menüt
            });
        });
    }
}

// ======= Gombok kattintási effektje =======
function activateButtonEffects() {
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            // Minden más gomb alapállapotba kerül
            document.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));

            // Az éppen kattintott gomb aktív lesz
            this.classList.add("active");
        });
    });
}
