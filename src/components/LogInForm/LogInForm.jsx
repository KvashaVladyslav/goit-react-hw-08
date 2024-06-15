import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { useId } from "react";

export default function LogInForm() {

    const initialValues = { email: "", password: "" }

    const emailFieldId = useId()
    const passwordFieldId = useId()
    
    const dispatch = useDispatch()

    const handleSubmit = (values, action) => {
        dispatch(logIn(values))
        action.resetForm()
    }

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <label htmlFor={emailFieldId}>Email
                            <Field type="email" name="email" id={emailFieldId} />
                            <ErrorMessage name="email" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor={passwordFieldId}>Password
                            <Field type="password" name="password" id={passwordFieldId} />
                            <ErrorMessage name="password" />
                        </label>
                    </div>
                    <button type="submit">Log In</button>
                </Form>
            </Formik>
        </div>
    )
}