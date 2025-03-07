function getRepositories() {
    let username = document.getElementById("username").value;
    let url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let output = `<tr><th>Repository Name</th><th>URL</th></tr>`;
        data.forEach(repo => {
            output += `<tr><td>${repo.name}</td><td><a href="${repo.html_url}" target="_blank">View</a></td></tr>`;
        });
        document.getElementById("repoTable").innerHTML = output;
    })
    .catch(error => console.error('Error fetching data:', error));
}
