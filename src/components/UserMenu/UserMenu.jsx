import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { logOut } from "../../redux/auth/operations"
import css from "./UserMenu.module.css"
import { IoLogOutSharp } from "react-icons/io5";

export default function UserMenu() {

    const dispatch = useDispatch()

    const user = useSelector(selectUser)

    return (
        <div className={css.container}>
            <p>Welcome, <span className={css.userName}>{user.name}</span></p>
            <button type="button" onClick={() => dispatch(logOut())}><IoLogOutSharp className={css.icon} />Logout</button>
        </div>
    )
}