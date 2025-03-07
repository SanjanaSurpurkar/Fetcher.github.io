function getUniversities() {
    let country = document.getElementById("country").value;
    let url = `http://universities.hipolabs.com/search?country=${country}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let output = "<h3>Universities:</h3><ul>";
        data.forEach(univ => {
            output += `<li>${univ.name}</li>`;
        });
        output += "</ul>";
        document.getElementById("universityList").innerHTML = output;
    })
    .catch(error => console.error('Error fetching data:', error));
}
