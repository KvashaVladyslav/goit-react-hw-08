import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { useId } from "react";
import { IoLogInSharp } from "react-icons/io5";
import css from "./LogInForm.module.css"
import toast from "react-hot-toast";
import * as Yup from "yup"


export default function LogInForm() {

    const initialValues = { email: "", password: "" }

    const ValidationSchema = Yup.object().shape({
        email: Yup.string().email().required("Here is a required field"),
        password: Yup.string().required("Here is a required field")
    })

    const emailFieldId = useId()
    const passwordFieldId = useId()

    const notifyLogin = () => toast("Welcome to the contacts book")
    const notifyWrong = () => toast("Something goes wrong, try again")

    const dispatch = useDispatch()

    const handleSubmit = (values, action) => {
        dispatch(logIn(values))
            .unwrap()
            .then(() => notifyLogin())
            .catch(() => notifyWrong())
            action.resetForm()
    }

    return (
        <div>
            <h2 className={css.title}>Account login form</h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ValidationSchema}>
                <Form className={css.form}>
                    <div className={css.formField}>
                        <label htmlFor={emailFieldId}>Email</label>
                        <Field className={css.input} type="email" name="email" id={emailFieldId} />
                        <ErrorMessage className={css.error} name="email" component="span" />
                    </div>
                    <div className={css.formField}>
                        <label htmlFor={passwordFieldId}>Password</label>
                        <Field className={css.input} type="password" name="password" id={passwordFieldId} />
                        <ErrorMessage className={css.error} name="password" component="span" />
                    </div>
                    <button className={css.button} type="submit"><IoLogInSharp className={css.icon} />Login</button>
                </Form>
            </Formik>
        </div>
    )
}