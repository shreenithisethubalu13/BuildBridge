import api from "./api";

const taskService = {

    async getAllTasks() {

        const response = await api.get("/tasks");

        return response.data;

    },

    async createTask(task) {

        const response = await api.post("/tasks", task);

        return response.data;

    },

    async deleteTask(id) {

        await api.delete(`/tasks/${id}`);

    }

};

export default taskService;