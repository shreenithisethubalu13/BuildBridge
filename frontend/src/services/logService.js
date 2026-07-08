import api from "./api";

const logService = {

    submitLog(data) {
        return api.post("/worklogs", data);
    },

    getLogs() {
        return api.get("/worklogs");
    }

};

export default logService;