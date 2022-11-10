import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../redux/auth/auth-operations'
import { getUser } from '../../../redux/auth/auth-selectors'
import { Button } from '@chakra-ui/react'


export default function NavbarUser() {
    const dispatch = useDispatch()
  const { name } = useSelector(getUser)
  

    const onLogout = () => {
        dispatch(logout())
  }
  
  return (
      <div>{`Welcome back, ${name}  `}
          <Button onClick={onLogout}>Logout</Button>
    </div>
  )
}
