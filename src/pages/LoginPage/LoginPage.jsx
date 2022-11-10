import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import LoginForm from '../../components/LoginForm/LoginForm'
import { getLoading } from "redux/auth/auth-selectors";
import { Spinner } from '@chakra-ui/react'



export default function LoginPage() {
  const dispatch = useDispatch();

  const loading = useSelector(getLoading)

  const onLogin = (data) => {
    dispatch(login(data));
  }

  
  return (
    <div className='container'>
      <h1>Login page</h1>
      <LoginForm onSubmit={onLogin} />
      {loading && <Spinner />}
    </div>
  )
}