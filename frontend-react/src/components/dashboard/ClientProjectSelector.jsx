import { useState } from "react";

function ClientProjectSelector() {

    const [selectedProject, setSelectedProject] = useState("");

    const [formData, setFormData] = useState({
        siteName: "",
        projectType: "",
        location: "",
        bhkCount: "",
        floorCount: "",
        budget: "",
        duration: "",
        startDate: "",
        endDate: ""
    });

    const projectTypes = [
        "Houses",
        "Commercial",
        "Industrial",
        "Institutional"
    ];

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleProjectSelect = (project) => {

        setSelectedProject(project);

        setFormData({
            ...formData,
            projectType: project
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData);

        alert("Inquiry Ready to Send!");

    };

    return (

        <div style={{ padding: "30px" }}>

            <h1>Select Your Project Type</h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2,250px)",
                    gap: "20px",
                    marginTop: "30px"
                }}
            >

                {projectTypes.map((project) => (

                    <div
                        key={project}
                        onClick={() => handleProjectSelect(project)}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "10px",
                            padding: "20px",
                            cursor: "pointer",
                            textAlign: "center",
                            fontWeight: "bold",
                            background:
                                selectedProject === project
                                    ? "#dbeafe"
                                    : "white"
                        }}
                    >

                        {project}

                    </div>

                ))}

            </div>

            {selectedProject && (

                <form
                    onSubmit={handleSubmit}
                    style={{
                        marginTop: "40px",
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: "500px",
                        gap: "15px"
                    }}
                >

                    <h2>

                        Configure Your {selectedProject}

                    </h2>

                    <input
                        type="text"
                        name="siteName"
                        placeholder="e.g., Green Valley Villa"
                        value={formData.siteName}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="location"
                        placeholder="Sector 45"
                        value={formData.location}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="budget"
                        placeholder="150000"
                        value={formData.budget}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="bhkCount"
                        placeholder="BHK Count"
                        value={formData.bhkCount}
                        onChange={handleChange}
                    />

                    <select
                        name="floorCount"
                        value={formData.floorCount}
                        onChange={handleChange}
                    >

                        <option value="">Select Floors</option>

                        <option value="1">1 Floor</option>

                        <option value="2">2 Floors</option>

                        <option value="3">3 Floors</option>

                        <option value="4">4 Floors</option>

                    </select>

                    <input
                        type="text"
                        name="duration"
                        placeholder="Duration (e.g. 12 Months)"
                        value={formData.duration}
                        onChange={handleChange}
                    />

                    <label>

                        Start Date

                    </label>

                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                    />

                    <label>

                        End Date

                    </label>

                    <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                    />

                    <button type="submit">

                        Send Inquiry

                    </button>

                </form>

            )}

        </div>

    );

}

export default ClientProjectSelector;