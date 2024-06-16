import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { logOut } from "../../redux/auth/operations"
import css from "./UserMenu.module.css"
import { IoLogOutSharp } from "react-icons/io5";
import toast from "react-hot-toast";

export default function UserMenu() {

    const notifyLogOut = () => toast("Good bye, see you soon")
    const notifyWrong = () => toast("Something goes wrong, try again")

    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logOut())
            .unwrap()
            .then(() => notifyLogOut())
            .catch(() => notifyWrong())
    }

    const user = useSelector(selectUser)

    return (
        <div className={css.container}>
            <p>Welcome, <span className={css.userName}>{user.name}</span></p>
            <button type="button" onClick={handleLogOut}><IoLogOutSharp className={css.icon} />Logout</button>
        </div>
    )
}