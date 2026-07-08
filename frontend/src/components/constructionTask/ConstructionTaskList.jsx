import { useEffect, useState } from "react";
import siteService from "../../services/siteService";
import taskService from "../../services/taskService";

function ConstructionTaskList() {

    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);

    const [form, setForm] = useState({

        projectId: "",

        title: "",

        description: "",

        priority: "MEDIUM",

        status: "PENDING",

        estimatedCost: ""

    });

    useEffect(() => {

        loadProjects();
        loadTasks();

    }, []);

    async function loadProjects() {

        try {

            const response = await siteService.getAllSites();

            setProjects(response.data);

        } catch (error) {

            console.error(error);

        }

    }

    async function loadTasks() {

        try {

            const data = await taskService.getAllTasks();

            setTasks(data);

        } catch (error) {

            console.error(error);

        }

    }

    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }

    async function saveTask(e) {

        e.preventDefault();

        try {

            await taskService.createTask(form);

            alert("Task Created Successfully");

            setForm({

                projectId: "",

                title: "",

                description: "",

                priority: "MEDIUM",

                status: "PENDING",

                estimatedCost: ""

            });

            loadTasks();

        } catch (error) {

            console.error(error);

            alert("Failed to create task");

        }

    }

    async function deleteTask(id) {

        try {

            await taskService.deleteTask(id);

            loadTasks();

        } catch (error) {

            console.error(error);

        }

    }

    return (

        <div style={{ padding: "30px" }}>

            <h1>Construction Tasks</h1>

            <hr />

            <form onSubmit={saveTask}>

                <select
                    name="projectId"
                    value={form.projectId}
                    onChange={handleChange}
                    required
                >

                    <option value="">Select Project</option>

                    {

                        projects.map(project => (

                            <option
                                key={project.id}
                                value={project.id}
                            >

                                {project.siteName}

                            </option>

                        ))

                    }

                </select>

                <br /><br />

                <input
                    type="text"
                    name="title"
                    placeholder="Task Title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                />

                <br /><br />

                <select
                    name="priority"
                    value={form.priority}
                    onChange={handleChange}
                >

                    <option>LOW</option>
                    <option>MEDIUM</option>
                    <option>HIGH</option>

                </select>

                <br /><br />

                <input
                    type="number"
                    name="estimatedCost"
                    placeholder="Estimated Cost"
                    value={form.estimatedCost}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <button type="submit">

                    Create Task

                </button>

            </form>

            <hr />

            <table
                border="1"
                width="100%"
                cellPadding="10"
            >

                <thead>

                    <tr>

                        <th>Project</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Cost</th>
                        <th>Delete</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        tasks.map(task => (

                            <tr key={task.id}>

                                <td>{task.project.siteName}</td>

                                <td>{task.title}</td>

                                <td>{task.description}</td>

                                <td>{task.priority}</td>

                                <td>{task.status}</td>

                                <td>₹ {task.estimatedCost}</td>

                                <td>

                                    <button
                                        onClick={() => deleteTask(task.id)}
                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default ConstructionTaskList;