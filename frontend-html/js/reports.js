window.onload = loadReports;

async function loadReports() {

    try {

        const response = await apiRequest("/api/inquiries/dashboard");
        const stats = await response.json();

        document.getElementById("total").innerText = stats.totalProjects;
        document.getElementById("pending").innerText = stats.pendingProjects;
        document.getElementById("assigned").innerText = stats.assignedProjects;
        document.getElementById("completed").innerText = stats.completedProjects;

        const ctx = document.getElementById("projectChart");

        new Chart(ctx, {
            type: "pie",
            data: {
                labels: [
                    "Pending",
                    "Assigned",
                    "Completed"
                ],
                datasets: [{
                    data: [
                        stats.pendingProjects,
                        stats.assignedProjects,
                        stats.completedProjects
                    ],
                    backgroundColor: [
                        "#ffc107",
                        "#0d6efd",
                        "#198754"
                    ]
                }]
            }
        });

    }

    catch (error) {
    console.error(error);
    alert(error.message);
}

}