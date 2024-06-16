import { useDispatch, useSelector } from "react-redux"
import { selectContactId, selectIsModalOpen } from "../../redux/modalWindow/selectors"
import { deleteContact } from "../../redux/contacts/operations"
import toast from "react-hot-toast"
import { closeModal } from "../../redux/modalWindow/slice"
import Modal from 'react-modal'
import css from "./ModalWindow.module.css"

Modal.setAppElement('#root');

export default function ModalWindow() {

    const notifyDeleteContact = () => toast("Contact was successfully deleted from your list")

    const isModalOpen = useSelector(selectIsModalOpen)
    const contactId = useSelector(selectContactId)

    const dispatch = useDispatch()
    
    const handleDelete = () => {
        dispatch(deleteContact(contactId)).unwrap().then(notifyDeleteContact())
        dispatch(closeModal())
    }

    const handleCloseModal = () => dispatch(closeModal())
    
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            className={css.modal}
            contentLabel="ModalWindow"
            >
            <p className={css.text}>Are you sure to delete the contact from your contacts list?</p>
            <div className={css.btnContainer}>
                <button onClick={handleDelete}>Yes</button>
                <button onClick={handleCloseModal}>No</button>
            </div>
        </Modal>
    )
}