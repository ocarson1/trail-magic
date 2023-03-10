import { Outlet, Link } from "react-router-dom";

import '../styles/Layout.css'

import { getUsername } from '../services/users'

const Layout = () => {
    let username
    //if (window.localStorage.getItem('loggedUser') != null) {
    //  username = getUsername(window.localStorage.getItem('loggedUser'))
    //}
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/"><h1>Trail Magic</h1></Link>
                    </li>
                    <li>
                        <p>{username}</p>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
