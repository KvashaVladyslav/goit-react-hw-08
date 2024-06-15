import { NavLink } from "react-router-dom"
import { IoLogInSharp } from "react-icons/io5";
import { RiRegisteredFill } from "react-icons/ri";
import css from "./AuthNav.module.css"

export default function AuthNav() {
    return (
        <ul className={css.container}>
            <li><NavLink className={css.link}  to="/registration"><RiRegisteredFill className={css.icon} />Registration</NavLink></li>
            <li><NavLink className={css.link}  to="/login"><IoLogInSharp className={css.icon} />Login</NavLink></li>
        </ul>
    ) 
}