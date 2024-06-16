import { Formik, Form, Field, ErrorMessage } from "formik"
import { useId } from "react"
import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/operations"
import * as Yup from "yup"
import { RiRegisteredFill } from "react-icons/ri";
import css from "./RegistrationForm.module.css"
import toast, {Toaster} from "react-hot-toast";


export default function RegistrationForm() {
    
    const dispatch = useDispatch()

    const notifyPositiveRegistration = () => toast("Registration successful")

    const handleSubmit = (values, actions) => {
        dispatch(register(values)).unwrap().then(notifyPositiveRegistration())
        actions.resetForm()
    }

    const initialValues = { name: "", email: "", password: "" }

    const nameFieldId = useId()
    const emailFieldId = useId()
    const passwordFieldId = useId()

    const ValidationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too short name, minimum 3 symbols").max(30, "Too long name, maximum 30 symbols").required("Here is required field"),
        email: Yup.string().email().required("Here is a required field"),
        password: Yup.string().min(3, "Too short name, minimum 3 symbols").max(30, "Too long name, maximum 30 symbols").required("Here is a required field")
    })

    return (
        <div>
            <h2 className={css.title}>Account registration form</h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ValidationSchema}>
                <Form className={css.form}>
                    <div className={css.formField}>
                        <label htmlFor={nameFieldId}>Name</label>
                        <Field className={css.input} type="text" name="name" id={nameFieldId} />
                        <ErrorMessage className={css.error} name="name" component="span"/>
                    </div>
                    <div className={css.formField}>
                        <label htmlFor={emailFieldId}>Email</label>
                        <Field className={css.input} type="email" name="email" id={emailFieldId} />
                        <ErrorMessage className={css.error} name="email" component="span"/>
                    </div>
                    <div className={css.formField}>
                        <label htmlFor={passwordFieldId}>Password</label>
                        <Field className={css.input} type="password" name="password" id={passwordFieldId} />
                        <ErrorMessage className={css.error} name="password" component="span"/>
                    </div>
                    <button className={css.button} type="submit"><RiRegisteredFill className={css.icon}></RiRegisteredFill>Registration</button>
                    <Toaster position="top-center" toastOptions={{ duration: 3000, style: {background: "rgb(240, 149, 121)", color: '#000000', textAlign: "center"} }} />
                </Form>
            </Formik>
        </div>
    )
}