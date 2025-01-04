

function showCityContent() {
    // Get the selected city from the dropdown
    const selectedCity = document.getElementById("city").value;

    // Hide all city sections
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    // Show the selected city's section if it exists
    if (selectedCity) {
        const citySection = document.getElementById(selectedCity);
        if (citySection) {
            citySection.style.display = "block";
        }
    }
}
