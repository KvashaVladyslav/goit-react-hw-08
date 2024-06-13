import {Formik, Form, Field, ErrorMessage} from "formik"
import { useId } from "react"
import * as Yup from "yup"
import css from "./ContactForm.module.css"
import { useDispatch } from "react-redux"
import { addContact } from "../../redux/contactsOps"

export default function ContactForm() {
    const initialValues = { name: "", number: "" };
    
    const nameFieldId = useId();
    const numberFieldId = useId();

    const dispatch = useDispatch()
    
    const handleSubmit = (values, actions) => {
        dispatch(addContact(values))
        actions.resetForm()
    }

    const ValidationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too short name, minimum 3 symbols").max(30, "Too long name, maximum 30 symbols").required("Here is required field"),
        number: Yup.string().matches(/^[0-9-]+$/, "Invalid symbols, please, use only numbers").min(3, "Example: 111-11-11 or +(38)050-123-12-33").required("Here is a required field")
    })

    return (
    <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ValidationSchema}>
                <Form className={css.form}>
                    <div className={css.formField}>
                        <label htmlFor={nameFieldId}>Name</label>
                        <Field className={css.input} type="text" name="name" id={nameFieldId} />
                        <ErrorMessage className={css.error} name="name" component="span" />
                    </div>
                    <div className={css.formField}>
                        <label htmlFor={numberFieldId}>Number</label>
                        <Field className={css.input} type="text" name="number" id={numberFieldId} />
                        <ErrorMessage className={css.error} name="number" component="span" />
                    </div>
                    <button className={css.button} type="submit">Add contact</button>
                </Form>
        </Formik>
    </div>
    )
}