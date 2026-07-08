const API_URL = "http://localhost:8080/api";

const username = localStorage.getItem("username");
const role = localStorage.getItem("role");

if (!username || role !== "SUPERVISOR") {
    window.location.href = "login.html";
}

document.getElementById("usernameDisplay").innerText = username;

window.onload = loadProjects;

async function loadProjects() {

    try {

        const response = await fetch(`${API_URL}/supervisor/projects`);

        const projects = await response.json();

        const container = document.getElementById("projectContainer");

        container.innerHTML = "";

        projects.forEach(project => {

            container.innerHTML += `

            <div class="col-md-4">

                <div class="card shadow h-100">

                    <div class="card-body">

                        <h4>${project.siteName}</h4>

                        <hr>

                        <p><strong>Client:</strong>
                        ${project.client.fullName}</p>

                        <p><strong>Location:</strong>
                        ${project.location}</p>

                        <p><strong>Project:</strong>
                        ${project.projectType}</p>

                        <p>

                        <strong>Status:</strong>

                        <span class="badge bg-primary">

                        ${project.status}

                        </span>

                        </p>

                        <select
                        class="form-select"
                        id="status-${project.id}">

                            <option value="PENDING">PENDING</option>

                            <option value="ASSIGNED">ASSIGNED</option>

                            <option value="IN_PROGRESS">IN_PROGRESS</option>

                            <option value="COMPLETED">COMPLETED</option>

                        </select>

                        <button

                        class="btn btn-success mt-3 w-100"

                        onclick="updateStatus(${project.id})">

                        Update Status

                        </button>

                    </div>

                </div>

            </div>

            `;

        });

    }

    catch(error){

        console.error(error);

    }

}

async function updateStatus(id){

    const status = document.getElementById(`status-${id}`).value;

    const response = await fetch(

        `${API_URL}/supervisor/${id}/status?status=${status}`,

        {

            method:"PUT"

        }

    );

    if(response.ok){

        alert("Status Updated Successfully");

        loadProjects();

    }

    else{

        alert("Update Failed");

    }

}

document.getElementById("logoutBtn").onclick=()=>{

    localStorage.clear();

    window.location.href="login.html";

}