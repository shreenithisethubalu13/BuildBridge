const username = localStorage.getItem("username");

window.onload = loadMyInquiries;

async function loadMyInquiries() {

    try {

        const response = await apiRequest(`/api/inquiries/my/${username}`);
        const data = await response.json();

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
                    <td>
    <span class="badge bg-${
        item.status === "PENDING" ? "warning" :
        item.status === "ASSIGNED" ? "primary" :
        item.status === "IN_PROGRESS" ? "info" :
        item.status === "COMPLETED" ? "success" : "secondary"
    }">
        ${item.status}
    </span>
</td>
                    <td>
                        <a href="project-details.html?id=${item.id}"
                           class="btn btn-primary btn-sm">
                            View Details
                        </a>
                    </td>
                </tr>
            `;

        });

    } catch (error) {
        console.error(error);
        alert("Unable to load inquiries.");
    }

}