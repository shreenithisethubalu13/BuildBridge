import api from "./api";

const siteService = {

    getAllSites() {
        return api.get("/sites");
    },

    getSiteById(id) {
        return api.get(`/sites/${id}`);
    },

    createSite(data) {
        return api.post("/sites", data);
    },

    updateStatus(id, status) {
        return api.patch(`/sites/${id}/status`, status);
    }

};

export default siteService;