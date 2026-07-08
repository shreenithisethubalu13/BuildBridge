const username = localStorage.getItem("username");
const role = localStorage.getItem("role");

if (!username || role !== "ADMIN") {
    window.location.href = "login.html";
}

document.getElementById("usernameDisplay").innerText = username;

document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "login.html";
});