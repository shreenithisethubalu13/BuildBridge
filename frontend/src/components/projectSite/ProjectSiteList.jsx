import { useEffect, useMemo, useState } from "react";
import api from "../../services/api";

function ProjectSiteList() {

    const [sites, setSites] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadSites();
    }, []);

    const loadSites = async () => {

        try {

            const response = await api.get("/inquiries");

            setSites(response.data);

        } catch (error) {

            console.error(error);
            alert("Failed to load project sites.");

        } finally {

            setLoading(false);

        }

    };

    const filteredSites = useMemo(() => {

        return sites.filter((site) => {

            const keyword = search.toLowerCase();

            return (
                site.siteName?.toLowerCase().includes(keyword) ||
                site.location?.toLowerCase().includes(keyword) ||
                site.projectType?.toLowerCase().includes(keyword)
            );

        });

    }, [sites, search]);

    const totalProjects = sites.length;

    const pendingProjects = sites.filter(
        (site) => site.status === "PENDING"
    ).length;

    const assignedProjects = sites.filter(
        (site) => site.status === "ASSIGNED"
    ).length;

    const completedProjects = sites.filter(
        (site) => site.status === "COMPLETED"
    ).length;

    const getStatusColor = (status) => {

        switch (status) {

            case "PENDING":
                return "#ff9800";

            case "ASSIGNED":
                return "#1976d2";

            case "COMPLETED":
                return "#2e7d32";

            case "REJECTED":
                return "#d32f2f";

            default:
                return "#757575";
        }

    };

    return (

        <div className="page">

            <h1 className="page-title">
                🏗️ Project Sites
            </h1>

            <p className="page-subtitle">
                Manage all construction project inquiries
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    gap: "20px",
                    marginBottom: "35px"
                }}
            >

                <div className="card">

                    <h2>{totalProjects}</h2>

                    <p>Total Projects</p>

                </div>

                <div className="card">

                    <h2 style={{ color: "#ff9800" }}>
                        {pendingProjects}
                    </h2>

                    <p>Pending</p>

                </div>

                <div className="card">

                    <h2 style={{ color: "#1976d2" }}>
                        {assignedProjects}
                    </h2>

                    <p>Assigned</p>

                </div>

                <div className="card">

                    <h2 style={{ color: "#2e7d32" }}>
                        {completedProjects}
                    </h2>

                    <p>Completed</p>

                </div>

            </div>

            <div
                className="card"
                style={{ marginBottom: "30px" }}
            >

                <input
                    type="text"
                    placeholder="Search Site / Location / Project Type"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "15px",
                        borderRadius: "12px",
                        border: "1px solid #ddd",
                        fontSize: "15px"
                    }}
                />

            </div>

            {loading ? (

                <h3>Loading...</h3>

            ) : (

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fill,minmax(340px,1fr))",
                        gap: "25px"
                    }}
                >

                    {filteredSites.map((site) => (

                        <div
                            key={site.id}
                            className="card"
                        >

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}
                            >

                                <h2
                                    style={{
                                        color: "#1565c0"
                                    }}
                                >
                                    {site.siteName}
                                </h2>

                                <span
                                    style={{
                                        background: getStatusColor(site.status),
                                        color: "white",
                                        padding: "6px 15px",
                                        borderRadius: "20px",
                                        fontSize: "13px",
                                        fontWeight: "600"
                                    }}
                                >
                                    {site.status}
                                </span>

                            </div>

                            <hr
                                style={{
                                    margin: "15px 0"
                                }}
                            />

                            <p>
                                <strong>📍 Location:</strong>
                                {" "}
                                {site.location}
                            </p>

                            <p>
                                <strong>🏠 Project:</strong>
                                {" "}
                                {site.projectType}
                            </p>

                            <p>
                                <strong>👤 Client:</strong>
                                {" "}
                                {site.client?.fullName}
                            </p>

                            <p>
                                <strong>🛏 BHK:</strong>
                                {" "}
                                {site.bhkCount}
                            </p>

                            <p>
                                <strong>🏢 Floors:</strong>
                                {" "}
                                {site.floorCount}
                            </p>

                            <p>
                                <strong>💰 Budget:</strong>
                                {" "}
                                ₹
                                {" "}
                                {Number(site.budget).toLocaleString("en-IN")}
                            </p>

                            <p>
                                <strong>📅 Start:</strong>
                                {" "}
                                {site.startDate}
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginTop: "20px"
                                }}
                            >

                                <button
                                    style={{
                                        background: "#1565c0",
                                        color: "white",
                                        border: "none",
                                        padding: "10px 18px",
                                        borderRadius: "10px"
                                    }}
                                >
                                    View Details
                                </button>

                                <button
                                    style={{
                                        background: "#f4f7fc",
                                        border: "none",
                                        padding: "10px 18px",
                                        borderRadius: "10px"
                                    }}
                                >
                                    Edit
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );

}

export default ProjectSiteList;