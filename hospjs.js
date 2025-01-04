function showCityContent() {
    const city = document.getElementById('city').value;
    const disease = document.getElementById('disease').value;

    // Hide all sections initially
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');

    // Display the relevant section based on both city and disease
    if (city && disease) {
        const sectionId = `${city}_${disease}`; // e.g., hyderabad_eye
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
        } else {
            alert('No hospitals found for the selected city and disease.');
        }
    }
}










