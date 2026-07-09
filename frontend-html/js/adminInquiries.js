const API = "http://localhost:8080/api";

let contractors = [];

window.onload = async () => {
    await loadContractors();
    await loadInquiries();
};

// Load all contractors
async function loadContractors() {
    try {
        const response = await fetch(`${API}/inquiries/contractors`);
        contractors = await response.json();
    } catch (error) {
        console.error("Error loading contractors:", error);
    }
}

// Load all inquiries
async function loadInquiries() {

    try {

        const response = await fetch(`${API}/inquiries`);
        const inquiries = await response.json();

        const container = document.getElementById("inquiryContainer");
        container.innerHTML = "";

        if (inquiries.length === 0) {
            container.innerHTML = `
                <div class="alert alert-info">
                    No Project Inquiries Found.
                </div>
            `;
            return;
        }

        inquiries.forEach(project => {

            let options = "";

            contractors.forEach(c => {
                options += `
                    <option value="${c.id}">
                        ${c.fullName}
                    </option>
                `;
            });

            container.innerHTML += `
                <div class="project-card">

                    <div class="project-body">

                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4>${project.siteName}</h4>

                            <span class="badge bg-primary">
                                ${project.status}
                            </span>
                        </div>

                        <p>
                            <i class="fa-solid fa-user text-primary"></i>
                            <strong> Client:</strong>
                            ${project.client.fullName}
                        </p>

                        <p>
                            <i class="fa-solid fa-location-dot text-danger"></i>
                            <strong> Location:</strong>
                            ${project.location}
                        </p>

                        <p>
                            <i class="fa-solid fa-building text-success"></i>
                            <strong> Project:</strong>
                            ${project.projectType}
                        </p>

                        <div class="mt-3">
                            <label class="form-label fw-semibold">
                                Assign Contractor
                            </label>

                            <select
                                id="contractor-${project.id}"
                                class="form-select">

                                ${options}

                            </select>
                        </div>

                        <button
                            class="btn btn-primary w-100 mt-3"
                            onclick="assign(${project.id})">

                            <i class="fa-solid fa-user-check"></i>
                            Assign Contractor

                        </button>

                        <a
                            href="project-details.html?id=${project.id}"
                            class="btn btn-success w-100 mt-2">

                            <i class="fa-solid fa-eye"></i>
                            View Details

                        </a>

                    </div>

                </div>
            `;

        });

    } catch (error) {

        console.error("Error loading inquiries:", error);

        document.getElementById("inquiryContainer").innerHTML = `
            <div class="alert alert-danger">
                Unable to load project inquiries.
            </div>
        `;
    }

}

// Assign contractor
async function assign(id) {

    const contractorId = document.getElementById(`contractor-${id}`).value;

    try {

        const response = await fetch(
            `${API}/inquiries/${id}/assign`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contractorId: contractorId
                })
            }
        );

        if (response.ok) {
            alert("✅ Contractor Assigned Successfully");
            await loadInquiries();
        } else {
            alert("❌ Assignment Failed");
        }

    } catch (error) {
        console.error(error);
        alert("❌ Server Error");
    }
}