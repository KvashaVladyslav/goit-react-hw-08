import { useSelector } from "react-redux"
import css from "./HomePage.module.css"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
import { Link } from "react-router-dom"

export default function HomePage() {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <div className={css.container}>
            <h1 className={css.title}>Welcome to the home page of contacts manager</h1>
            <p className={css.text}>Here you can create your own contacts book</p> 
            {isLoggedIn ? <Link className={css.link} to="/contacts">Contacts</Link> : <div className={css.linkContainer}><Link className={css.link} to="/registration">Registration</Link> <Link className={css.link} to="/login">Login</Link></div>}
        </div>
    )
}