const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

document.getElementById("logoutBtn").addEventListener("click", logout);
document.getElementById("addSiteBtn").addEventListener("click", addInquiry);

loadInquiries();

async function loadInquiries() {

    try {

        const response = await apiRequest("/api/inquiries");

        if (response.ok) {

            const inquiries = await response.json();

            const tableBody = document.getElementById("siteTableBody");
            tableBody.innerHTML = "";

            inquiries.forEach(inquiry => {

                tableBody.innerHTML += `
                    <tr>
                        <td>${inquiry.id}</td>
                        <td>${inquiry.siteName}</td>
                        <td>${inquiry.projectType}</td>
                        <td>${inquiry.location}</td>
                        <td>${inquiry.status}</td>
                    </tr>
                `;

            });

        } else {
            alert("Failed to load inquiries.");
        }

    } catch (error) {
        console.error(error);
        alert("Unable to connect to server.");
    }

}

async function addInquiry() {

    const request = {

        siteName: document.getElementById("siteName").value.trim(),
        projectType: document.getElementById("projectType").value.trim(),
        location: document.getElementById("location").value.trim(),
        bhkCount: parseInt(document.getElementById("bhkCount").value),
        floorCount: parseInt(document.getElementById("floorCount").value),
        budget: parseFloat(document.getElementById("budget").value),
        duration: document.getElementById("duration").value.trim(),
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value

    };

    if (
        !request.siteName ||
        !request.projectType ||
        !request.location ||
        !request.duration ||
        !request.startDate ||
        !request.endDate
    ) {
        alert("Please fill all required fields.");
        return;
    }

    try {

        const response = await apiRequest(
            "/api/inquiries",
            "POST",
            request
        );

        if (response.ok) {

            alert("Project Inquiry Created Successfully!");

            document.getElementById("siteName").value = "";
            document.getElementById("projectType").value = "";
            document.getElementById("location").value = "";
            document.getElementById("bhkCount").value = "";
            document.getElementById("floorCount").value = "";
            document.getElementById("budget").value = "";
            document.getElementById("duration").value = "";
            document.getElementById("startDate").value = "";
            document.getElementById("endDate").value = "";

            loadInquiries();

        } else {

            alert("Failed to create inquiry.");

        }

    } catch (error) {

        console.error(error);
        alert("Server error.");

    }

}

function logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");

    window.location.href = "login.html";

}