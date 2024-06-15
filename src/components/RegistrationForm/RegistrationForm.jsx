import { Formik, Form, Field, ErrorMessage } from "formik"
import { useId } from "react"
import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/operations"

export default function RegistrationForm() {
    
    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        dispatch(register(values)).unwrap().then(data => console.log(data)).catch(err => console.log(err))
        actions.resetForm()
    }

    const initialValues = { name: "", email: "", password: "" }

    const nameFieldId = useId()
    const emailFieldId = useId()
    const passwordFieldId = useId()

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <label htmlFor={nameFieldId}>Name
                            <Field type="text" name="name" id={nameFieldId} />
                            <ErrorMessage name="name" component="span"/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor={emailFieldId}>Email
                            <Field type="text" name="email" id={emailFieldId} />
                            <ErrorMessage name="email" component="span"/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor={passwordFieldId}>Password
                            <Field type="text" name="password" id={passwordFieldId} />
                            <ErrorMessage name="password" component="span"/>
                        </label>
                    </div>
                    <button type="submit">Registration</button>
                </Form>
            </Formik>
        </div>
    )
}