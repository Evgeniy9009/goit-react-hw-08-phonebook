import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import PublicRoute from "components/PublicRoute/PublicRoute";
import SharedLoyout from "components/SharedLoyout/SharedLoyout";
import Loading from "components/Loading/Loading";


const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'))
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage") ) ;

const UserRoutes = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Routes path="/" element={<SharedLoyout />}>
                <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<ContactsPage />} />
                </Route>
                <Route path="/" element= {<h1 className="container">Contacts App</h1>} />
                <Route path="*" element= {<h1 className="container">Not found</h1>} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes