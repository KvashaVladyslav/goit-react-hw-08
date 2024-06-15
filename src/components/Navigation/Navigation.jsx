import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css"
import { RiContactsBook3Fill } from "react-icons/ri";
import { BiSolidHome } from "react-icons/bi";

export default function Navigation() {

    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <nav >
            <ul className={css.container}>
                <li><NavLink className={css.link} to="/"><BiSolidHome className={css.icon} />Home</NavLink></li>
                {isLoggedIn && <li><NavLink className={css.link} to="/contacts"><RiContactsBook3Fill className={css.icon} />Contacts</NavLink></li>}
            </ul>
        </nav>
    )
}