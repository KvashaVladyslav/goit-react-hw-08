import { NavLink } from "react-router-dom"
import css from "./AuthNav.module.css"

export default function AuthNav() {
    return (
        <ul className={css.container}>
            <li><NavLink className={css.link}  to="/registration">Registration</NavLink></li>
            <li><NavLink className={css.link}  to="/login">Login</NavLink></li>
        </ul>
    ) 
}