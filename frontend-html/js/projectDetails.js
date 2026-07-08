const API_URL = "http://localhost:8080/api";

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

loadProject();

async function loadProject() {

    try {

        const response = await fetch(`${API_URL}/inquiries/${id}`);

        const project = await response.json();

        document.getElementById("projectDetails").innerHTML = `

            <table class="table table-bordered">

                <tr>
                    <th>ID</th>
                    <td>${project.id}</td>
                </tr>

                <tr>
                    <th>Site Name</th>
                    <td>${project.siteName}</td>
                </tr>

                <tr>
                    <th>Client</th>
                    <td>${project.client.fullName}</td>
                </tr>

                <tr>
                    <th>Project Type</th>
                    <td>${project.projectType}</td>
                </tr>

                <tr>
                    <th>Location</th>
                    <td>${project.location}</td>
                </tr>

                <tr>
                    <th>BHK</th>
                    <td>${project.bhkCount}</td>
                </tr>

                <tr>
                    <th>Floors</th>
                    <td>${project.floorCount}</td>
                </tr>

                <tr>
                    <th>Budget</th>
                    <td>₹ ${project.budget}</td>
                </tr>

                <tr>
                    <th>Duration</th>
                    <td>${project.duration}</td>
                </tr>

                <tr>
                    <th>Start Date</th>
                    <td>${project.startDate}</td>
                </tr>

                <tr>
                    <th>End Date</th>
                    <td>${project.endDate}</td>
                </tr>

                <tr>
                    <th>Status</th>
                    <td>
                        <span class="badge bg-success">
                            ${project.status}
                        </span>
                    </td>
                </tr>

                <tr>
                    <th>Contractor</th>
                    <td>

                    ${
                        project.contractor
                        ? project.contractor.fullName
                        : "Not Assigned"
                    }

                    </td>

                </tr>

            </table>

        `;

    }

    catch(error){

        console.error(error);

        document.getElementById("projectDetails").innerHTML =
        "<h4 class='text-danger'>Unable to load project.</h4>";

    }

}