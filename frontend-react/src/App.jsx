import { Routes, Route, Navigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/layout/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";

import ProjectSiteList from "./components/projectSite/ProjectSiteList";
import ConstructionTaskList from "./components/constructionTask/ConstructionTaskList";

import ClientProjectSelector from "./components/dashboard/ClientProjectSelector";

function PrivateRoute({ children }) {

    const user = useSelector((state) => state.auth.user);

    return user ? children : <Navigate to="/login" replace />;

}

function Dashboard() {

    const user = useSelector((state) => state.auth.user);

    return (

        <div className="page">

            <h1 className="page-title">
                Welcome, {user?.username}
            </h1>

            <p className="page-subtitle">
                BuildBridge Construction Management Dashboard
            </p>

            <ClientProjectSelector />

        </div>

    );

}

function Layout() {

    return (

        <>

            <Navbar />

            <div className="layout">

                <aside className="sidebar">

                    <Link to="/">🏠 Dashboard</Link>

                    <Link to="/sites">🏗️ Project Sites</Link>

                    <Link to="/tasks">📋 Tasks</Link>

                    <Link to="/assignments">👷 Assignments</Link>

                    <Link to="/logs">📝 Daily Logs</Link>

                    <Link to="/reports">📊 Reports</Link>

                </aside>

                <main className="content">

                    <Routes>

                        <Route
                            path="/"
                            element={<Dashboard />}
                        />

                        <Route
                            path="/sites"
                            element={<ProjectSiteList />}
                        />

                        <Route
                            path="/tasks"
                            element={<ConstructionTaskList />}
                        />

                        <Route
                            path="/assignments"
                            element={
                                <div className="page">
                                    <h1>Assignments</h1>
                                </div>
                            }
                        />

                        <Route
                            path="/logs"
                            element={
                                <div className="page">
                                    <h1>Daily Logs</h1>
                                </div>
                            }
                        />

                        <Route
                            path="/reports"
                            element={
                                <div className="page">
                                    <h1>Reports</h1>
                                </div>
                            }
                        />

                    </Routes>

                </main>

            </div>

        </>

    );

}

function App() {

    return (

        <Routes>

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/*"
                element={
                    <PrivateRoute>

                        <Layout />

                    </PrivateRoute>
                }
            />

        </Routes>

    );

}

export default App;