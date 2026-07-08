window.onload = loadReports;

async function loadReports() {

    try {

        const response = await apiRequest("/api/inquiries/dashboard");

        const stats = await response.json();

        document.getElementById("total").innerText = stats.totalProjects;
        document.getElementById("pending").innerText = stats.pendingProjects;
        document.getElementById("assigned").innerText = stats.assignedProjects;
        document.getElementById("completed").innerText = stats.completedProjects;

    }

    catch(error){

        console.error(error);

        alert("Unable to load reports.");

    }

}