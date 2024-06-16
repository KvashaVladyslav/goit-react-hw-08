import { useSelector } from "react-redux"
import css from "./HomePage.module.css"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
import { Link } from "react-router-dom"
import { RiRegisteredFill } from "react-icons/ri";
import { IoLogInSharp } from "react-icons/io5";
import { RiContactsBook3Fill } from "react-icons/ri";

export default function HomePage() {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <div className={css.container}>
            <h1 className={css.title}>Welcome to the home page of contacts manager</h1>
            <p className={css.text}>Here you can create your own contacts book</p> 
            {isLoggedIn ? <Link className={css.link} to="/contacts"><RiContactsBook3Fill className={css.icon} />Contacts</Link> : <div className={css.linkContainer}><Link className={css.link} to="/register"><RiRegisteredFill className={css.icon} />Registration</Link> <Link className={css.link} to="/login"><IoLogInSharp className={css.icon} />Login</Link></div>}
        </div>
    )
}