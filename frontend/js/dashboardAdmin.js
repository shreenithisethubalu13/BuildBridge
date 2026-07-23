const API_URL = "http://localhost:8080/api";

window.onload = () => {
    loadDashboard();
};

async function loadDashboard() {

    try {

        // Dashboard Statistics
        const statsResponse = await fetch(`${API_URL}/inquiries/dashboard`);
        const stats = await statsResponse.json();

        document.getElementById("totalProjects").innerText = stats.totalProjects;
        document.getElementById("pendingProjects").innerText = stats.pendingProjects;
        document.getElementById("assignedProjects").innerText = stats.assignedProjects;
        document.getElementById("completedProjects").innerText = stats.completedProjects;

        // Load Projects
        const response = await fetch(`${API_URL}/inquiries`);
        const inquiries = await response.json();

        displayProjects(inquiries);

    } catch (error) {

        console.error(error);
        alert("Unable to load dashboard.");

    }

}

function displayProjects(inquiries) {

    const container = document.getElementById("projectContainer");
    container.innerHTML = "";

    if (inquiries.length === 0) {
        container.innerHTML = `
            <div class="alert alert-info">
                No Projects Found.
            </div>
        `;
        return;
    }

    inquiries.forEach(inquiry => {

        let badge = "";
        let badgeClass = "";

        switch (inquiry.status) {

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
                badge = inquiry.status;
                badgeClass = "bg-secondary";
        }

        container.innerHTML += `
        <div class="project-card">

            <div class="project-body">

                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4>${inquiry.siteName}</h4>

                    <span class="badge ${badgeClass}">
                        ${badge}
                    </span>
                </div>

                <p>
                    <i class="fa-solid fa-user text-primary"></i>
                    <strong> Client:</strong> ${inquiry.client.fullName}
                </p>

                <p>
                    <i class="fa-solid fa-location-dot text-danger"></i>
                    <strong> Location:</strong> ${inquiry.location}
                </p>

                <p>
                    <i class="fa-solid fa-building text-success"></i>
                    <strong> Type:</strong> ${inquiry.projectType}
                </p>

                <p>
                    <i class="fa-solid fa-user-hard-hat text-warning"></i>
                    <strong> Contractor:</strong>
                    ${inquiry.contractor ? inquiry.contractor.fullName : "Not Assigned"}
                </p>

                <a href="project-details.html?id=${inquiry.id}"
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