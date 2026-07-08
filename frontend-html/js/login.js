document.getElementById("loginBtn").addEventListener("click", login);

async function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    message.innerHTML = "";

    if (username === "" || password === "") {
        message.innerHTML = "Please enter username and password.";
        return;
    }

    try {

        const response = await apiRequest(
            "/api/auth/login",
            "POST",
            {
                username: username,
                password: password
            }
        );

        if (response.ok) {

            const data = await response.json();

            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.username);
            localStorage.setItem("role", data.role);
            localStorage.setItem("userId", data.id);

            switch (data.role) {

                case "ADMIN":
                    window.location.href = "dashboard-admin.html";
                    break;

                case "CLIENT":
                    window.location.href = "dashboard-client.html";
                    break;

                case "CONTRACTOR":
                    window.location.href = "dashboard-contractor.html";
                    break;

                case "SUPERVISOR":
                    window.location.href = "dashboard-supervisor.html";
                    break;

                default:
                    alert("Unknown user role");
            }

        } else {

            message.innerHTML = "Invalid username or password.";

        }

    } catch (error) {

        console.error(error);
        message.innerHTML = "Unable to connect to server.";

    }
}