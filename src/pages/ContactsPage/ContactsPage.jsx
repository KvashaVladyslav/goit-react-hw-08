import ContactForm from "../../components/ContactForm/ContactForm"
import SearchBox from "../../components/SearchBox/SearchBox"
import ContactList from "../../components/ContactList/ContactList"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchContacts } from "../../redux/contacts/operations"
import css from "./ContactsPage.module.css"
import { selectIsModalOpen } from "../../redux/modalWindow/selectors"
import ModalWindow from "../../components/ModalWindow/ModalWindow"


export default function ContactsPage() {

    const isModalOpen = useSelector(selectIsModalOpen)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <div>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
            {isModalOpen && <ModalWindow />}
        </div>
    )
}

// vlados@ukr.net
// vlados123123
