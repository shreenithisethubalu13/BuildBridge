import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error } = useSelector((state) => state.auth);

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {

        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const result = await dispatch(login(credentials));

        if (login.fulfilled.match(result)) {

            alert("Login Successful!");

            navigate("/");

        }

    };

    return (

        <div>

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="username"
                    placeholder="Credentials"
                    value={credentials.username}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={credentials.password}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>

            </form>

            {error && (
                <p style={{ color: "red" }}>
                    {error}
                </p>
            )}

        </div>

    );

}

export default Login;