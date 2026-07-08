const API = "http://localhost:8080/api";

let contractors = [];

window.onload = async () => {

    await loadContractors();

    await loadInquiries();

};

async function loadContractors() {

    const response = await fetch(`${API}/inquiries/contractors`);

    contractors = await response.json();

}

async function loadInquiries() {

    const response = await fetch(`${API}/inquiries`);

    const inquiries = await response.json();

    const container = document.getElementById("inquiryContainer");

    container.innerHTML = "";

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

        <div class="col-md-4">

            <div class="card shadow">

                <div class="card-body">

                    <h4>${project.siteName}</h4>

                    <hr>

                    <p><strong>Client:</strong>
                    ${project.client.fullName}</p>

                    <p><strong>Location:</strong>
                    ${project.location}</p>

                    <p><strong>Status:</strong>
                    ${project.status}</p>

                    <select

                        id="contractor-${project.id}"

                        class="form-select">

                        ${options}

                    </select>

                    <button

                        class="btn btn-primary mt-3 w-100"

                        onclick="assign(${project.id})">

                        Assign Contractor

                    </button>

                    <a

                    href="project-details.html?id=${project.id}"

                    class="btn btn-success mt-2 w-100">

                    View Details

                    </a>

                </div>

            </div>

        </div>

        `;

    });

}

async function assign(id){

    const contractorId =

    document.getElementById(

        `contractor-${id}`

    ).value;

    const response = await fetch(

        `${API}/inquiries/${id}/assign`,

        {

            method:"PUT",

            headers:{

                "Content-Type":"application/json"

            },

            body:JSON.stringify({

                contractorId:contractorId

            })

        }

    );

    if(response.ok){

        alert("Contractor Assigned Successfully");

        loadInquiries();

    }

    else{

        alert("Assignment Failed");

    }

}