import { FaSquarePhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import css from "./Contact.module.css"
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";


export default function Contact({ contact: { name, number, id } }) {
    const dispatch = useDispatch()

    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <p className={css.iconField}><FaUser className={clsx(css.icon, css.black)} />{name}</p>
                <p className={css.iconField}><FaSquarePhone className={clsx(css.icon, css.brown)} />{number}</p>
            </div>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </div>
    )
}