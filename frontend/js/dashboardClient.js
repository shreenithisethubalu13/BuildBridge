const username = localStorage.getItem("username");

window.onload = loadProjects;

async function loadProjects(){

    const response = await apiRequest(
        `/api/inquiries/my/${username}`
    );

    const projects = await response.json();

    document.getElementById("projectContainer").innerHTML="";

    projects.forEach(project=>{

        let color="secondary";

        if(project.status==="PENDING") color="warning";
        if(project.status==="ASSIGNED") color="primary";
        if(project.status==="IN_PROGRESS") color="info";
        if(project.status==="COMPLETED") color="success";

        document.getElementById("projectContainer").innerHTML+=`

        <div class="col-md-4">

            <div class="card shadow">

                <div class="card-body">

                    <h4>${project.siteName}</h4>

                    <hr>

                    <p><strong>Location:</strong> ${project.location}</p>

                    <p><strong>Project:</strong> ${project.projectType}</p>

                    <span class="badge bg-${color}">
                        ${project.status}
                    </span>

                    <br><br>

                    <a href="project-details.html?id=${project.id}"

                    class="btn btn-primary w-100">

                    View Details

                    </a>

                </div>

            </div>

        </div>

        `;

    });

}

function logout(){

    localStorage.clear();

    window.location.href="login.html";

}