import { useState } from "react";
import authService from "../services/authService";

function Register() {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        role: "CLIENT"
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await authService.register(formData);

            alert("Registration Successful!");

            setFormData({
                username: "",
                email: "",
                password: "",
                role: "CLIENT"
            });

        } catch (error) {

            alert("Registration Failed!");

            console.log(error);

        }

    };

    return (

        <div style={{ padding: "40px" }}>

            <h2>Register</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <br /><br />

                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >

                    <option value="CLIENT">CLIENT</option>
                    <option value="CONTRACTOR">CONTRACTOR</option>

                </select>

                <br /><br />

                <button type="submit">

                    Register

                </button>

            </form>

        </div>

    );

}

export default Register;