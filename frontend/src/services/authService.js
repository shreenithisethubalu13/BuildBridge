import api from "./api";

const authService = {

    async login(credentials){

        const response = await api.post("/auth/login", credentials);

        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);

        return response.data;
    },

    async register(data){

        const response = await api.post("/auth/register", data);

        return response.data;
    }

};

export default authService;