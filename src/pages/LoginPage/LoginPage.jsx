import LoginForm from "components/LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import { isLogin } from "../../redux/auth/auth-selectors";

import { Navigate } from "react-router-dom";



export default function LoginPage() {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(isLogin);
  console.log(isLogin)

  const onLogin = (data) => {
    dispatch(login(data));
  }

  if (isUserLogin) {
    return <Navigate to="/contacts" />
  }

  return (
    <div className='container'>
      <h1>Login page</h1>
      <LoginForm onSubmit={onLogin}/>
    </div>
  )
}