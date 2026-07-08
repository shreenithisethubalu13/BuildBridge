const API_URL = "http://localhost:8080/api/users";

let users = [];

window.onload = loadUsers;

async function loadUsers() {

    try {

        const response = await fetch(API_URL);

        users = await response.json();

        displayUsers(users);

    }

    catch(error){

        console.error(error);

        alert("Unable to load users.");

    }

}

function displayUsers(list){

    const table = document.getElementById("userTable");

    table.innerHTML = "";

    list.forEach(user=>{

        table.innerHTML += `

        <tr>

            <td>${user.id}</td>

            <td>${user.fullName}</td>

            <td>${user.username}</td>

            <td>${user.email}</td>

            <td>${user.role}</td>

            <td>

                <button

                class="btn btn-danger btn-sm"

                onclick="deleteUser(${user.id})">

                Delete

                </button>

            </td>

        </tr>

        `;

    });

}

function searchUsers(){

    const text = document
        .getElementById("searchUser")
        .value
        .toLowerCase();

    const filtered = users.filter(user =>

        user.username.toLowerCase().includes(text) ||

        user.fullName.toLowerCase().includes(text)

    );

    displayUsers(filtered);

}

async function deleteUser(id){

    if(!confirm("Delete this user?")) return;

    const response = await fetch(

        `${API_URL}/${id}`,

        {

            method:"DELETE"

        }

    );

    if(response.ok){

        alert("User Deleted");

        loadUsers();

    }

    else{

        alert("Delete Failed");

    }

}

function logout(){

    localStorage.clear();

    window.location.href="login.html";

}