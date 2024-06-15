import { NavLink } from "react-router-dom"

export default function AuthNav() {
    return (
        <ul>
            <li><NavLink to="/registration">Registration</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
        </ul>
    )
}