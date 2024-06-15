import css from "./App.module.css"
import { Suspense, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { lazy } from "react"
import Layout from "../Layout/Layout"
import { useDispatch, useSelector } from "react-redux"
import { selectIsRefreshing } from "../../redux/auth/selectors"
import { refreshUser } from "../../redux/auth/operations"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute"


const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"))
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"))
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistationPage"))
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"))
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"))

export default function App() {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing)

    useEffect(() => {
        dispatch(refreshUser())
    }, [dispatch])

    return isRefreshing ? (
        <div>REFRESHING USER...</div>
    ) : (
        <div className={css.container}>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />} />
                        <Route path="/registration" element={<RestrictedRoute component={<RegistrationPage/>} redirectTo="/" />} />
                        <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} redirectTo="/contacts" />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            </Layout>
        </div>
    )
}