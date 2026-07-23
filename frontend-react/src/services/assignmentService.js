import api from "./api";

const assignmentService = {

    getAssignments() {
        return api.get("/assignments");
    },

    createAssignment(data) {
        return api.post("/assignments", data);
    }

};

export default assignmentService;