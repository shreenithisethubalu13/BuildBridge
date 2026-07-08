const API_BASE_URL = "http://localhost:8080";

async function apiRequest(endpoint, method = "GET", data = null) {

    const token = localStorage.getItem("token");

    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {
        options.headers["Authorization"] = "Bearer " + token;
    }

    if (data) {
        options.body = JSON.stringify(data);
    }

    return await fetch(API_BASE_URL + endpoint, options);
}