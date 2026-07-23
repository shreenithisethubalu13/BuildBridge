const API_URL = "http://localhost:8080/api/users";

let users = [];

window.onload = loadUsers;

// Load Users
async function loadUsers() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to load users");
        }

        users = await response.json();

        displayUsers(users);

    } catch (error) {

        console.error(error);

        document.getElementById("userTable").innerHTML = `
            <tr>
                <td colspan="6" class="text-center text-danger">
                    Unable to load users.
                </td>
            </tr>
        `;
    }
}

// Display Users
function displayUsers(list) {

    const table = document.getElementById("userTable");

    table.innerHTML = "";

    if (list.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="6" class="text-center">
                    No Users Found
                </td>
            </tr>
        `;

        return;
    }

    list.forEach(user => {

        let badgeClass = "bg-secondary";

        switch (user.role) {

            case "ADMIN":
                badgeClass = "bg-danger";
                break;

            case "CLIENT":
                badgeClass = "bg-primary";
                break;

            case "CONTRACTOR":
                badgeClass = "bg-success";
                break;

            case "SUPERVISOR":
                badgeClass = "bg-warning text-dark";
                break;
        }

        table.innerHTML += `
            <tr>

                <td>${user.id}</td>

                <td>
                    <i class="fa-solid fa-user text-primary"></i>
                    ${user.fullName}
                </td>

                <td>${user.username}</td>

                <td>${user.email}</td>

                <td>
                    <span class="badge ${badgeClass}">
                        ${user.role}
                    </span>
                </td>

                <td>

                    <button
                        class="btn btn-danger btn-sm"
                        onclick="deleteUser(${user.id})">

                        <i class="fa-solid fa-trash"></i>
                        Delete

                    </button>

                </td>

            </tr>
        `;
    });
}

// Search
function searchUsers() {

    const text = document
        .getElementById("searchUser")
        .value
        .toLowerCase();

    const filtered = users.filter(user =>

        user.username.toLowerCase().includes(text) ||

        user.fullName.toLowerCase().includes(text) ||

        user.role.toLowerCase().includes(text)

    );

    displayUsers(filtered);
}

// Delete User
async function deleteUser(id) {

    if (!confirm("Are you sure you want to delete this user?")) {
        return;
    }

    try {

        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (response.ok) {

            alert("✅ User Deleted Successfully");

            loadUsers();

        } else {

            alert("❌ Delete Failed");

        }

    } catch (error) {

        console.error(error);

        alert("❌ Server Error");

    }
}

// Logout
function logout() {

    localStorage.clear();

    window.location.href = "login.html";

}