import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css"
export default function Navigation() {

    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <nav >
            <ul className={css.container}>
                <li><NavLink className={css.link} to="/">Home</NavLink></li>
                {isLoggedIn && <li><NavLink className={css.link} to="/contacts">Contacts</NavLink></li>}
            </ul>
        </nav>
    )
}