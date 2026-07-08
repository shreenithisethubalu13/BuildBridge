const token = localStorage.getItem("token");

fetch(`${BASE_URL}/inquiries`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
.then(res => res.json())
.then(data => {

    const table = document.getElementById("tableBody");

    table.innerHTML = "";

    data.forEach(item => {

        table.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.siteName}</td>
                <td>${item.location}</td>
                <td>${item.projectType}</td>
                <td>${item.budget}</td>
                <td>${item.status}</td>
            </tr>
        `;
    });

})
.catch(err => console.error(err));