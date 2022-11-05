import LoginPage from "pages/LoginPage/LoginPage";
import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom'

const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'))

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Load page</p>}>
            <Routes>
                <Route path="/" element= {<h1 className="container">Contacts App</h1>} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="*" element= {<h1 className="container">Not found</h1>} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes