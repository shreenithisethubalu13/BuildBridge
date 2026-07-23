import { useSelector } from "react-redux";

function Navbar() {

    const user = useSelector((state) => state.auth.user);

    return (

        <header className="navbar">

            <div className="navbar-left">

                <div className="logo-box">
                    🏗️
                </div>

                <div className="logo-text">

                    <h2>BuildBridge</h2>

                    <span>Construction Management Platform</span>

                </div>

            </div>

            <div className="navbar-search">

                <input
                    type="text"
                    placeholder="Search Projects..."
                />

            </div>

            <div className="navbar-right">

                <button className="circle-btn">🔔</button>

                <button className="circle-btn">⚙️</button>

                <div className="user-box">

                    <div className="avatar">

                        {user?.username
                            ? user.username.charAt(0).toUpperCase()
                            : "U"}

                    </div>

                    <div>

                        <h4>{user?.username}</h4>

                        <small>{user?.role}</small>

                    </div>

                </div>

            </div>

        </header>

    );

}

export default Navbar;