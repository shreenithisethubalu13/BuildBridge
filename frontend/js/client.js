const API_URL = "http://localhost:8080/api";

const username = localStorage.getItem("username");
const role = localStorage.getItem("role");

if (!username || role !== "CLIENT") {
    window.location.href = "login.html";
}

document.getElementById("usernameDisplay").innerText = username;

document.getElementById("logoutBtn").addEventListener("click", logout);

window.onload = () => {
    loadMyProjects();
};

async function loadMyProjects() {

    try {

        const response = await fetch(
            `${API_URL}/inquiries/my/${username}`
        );

        const projects = await response.json();

        displayProjects(projects);

    } catch (error) {

        console.error(error);

        document.getElementById("myProjects").innerHTML = `
            <div class="alert alert-danger">
                Unable to load projects.
            </div>
        `;

    }

}

function displayProjects(projects) {

    const container = document.getElementById("myProjects");

    container.innerHTML = "";

    if (projects.length === 0) {

        container.innerHTML = `
            <div class="alert alert-info">
                No Projects Yet.
            </div>
        `;

        return;

    }

    projects.forEach(project => {

    let badge = "";
    let badgeClass = "";

    switch (project.status) {
        case "PENDING":
            badge = "🟡 Pending";
            badgeClass = "bg-warning text-dark";
            break;

        case "ASSIGNED":
            badge = "🔵 Assigned";
            badgeClass = "bg-primary";
            break;

        case "IN_PROGRESS":
            badge = "🟠 In Progress";
            badgeClass = "bg-info text-dark";
            break;

        case "COMPLETED":
            badge = "🟢 Completed";
            badgeClass = "bg-success";
            break;

        default:
            badge = project.status;
            badgeClass = "bg-secondary";
    }

    container.innerHTML += `
    <div class="project-card">

        <div class="project-body">

            <div class="d-flex justify-content-between align-items-center mb-3">
                <h4>${project.siteName}</h4>

                <span class="badge ${badgeClass}">
                    ${badge}
                </span>
            </div>

            <p>
                <i class="fa-solid fa-location-dot text-danger"></i>
                <strong> Location:</strong> ${project.location}
            </p>

            <p>
                <i class="fa-solid fa-building text-success"></i>
                <strong> Type:</strong> ${project.projectType}
            </p>

            <a href="project-details.html?id=${project.id}"
               class="btn btn-primary w-100 mt-3">
                <i class="fa-solid fa-eye"></i> View Details
            </a>

        </div>

    </div>
    `;
});

}

function logout() {

    localStorage.clear();

    window.location.href = "login.html";

}