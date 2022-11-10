import PropTypes from "prop-types";
import { nanoid } from 'nanoid'

import initialState from './initialState'
import fields from './fields'
import { useMemo } from 'react'
import useForm from "shared/hooks/useForm";
import TextField from "shared/components/TextField/TextField";

import { getLoading } from "redux/auth/auth-selectors";
import { Spinner } from '@chakra-ui/react'
import { useSelector } from "react-redux";
import { Button } from '@chakra-ui/react'


const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit })
    
    const loading = useSelector(getLoading)
    
    const nameId = useMemo(() => nanoid(), [])
    const emailId = useMemo(() => nanoid(), [])
    const passwordId = useMemo(() => nanoid(), [])

    const { name, email, password } = state


    return (

            <form onSubmit={handleSubmit}>
                <TextField id={nameId} value={name} handleChange={handleChange} {...fields.name} />
                <TextField id={emailId} value={email} handleChange={handleChange} {...fields.email} />
                <TextField id={passwordId} value={password} handleChange={handleChange} {...fields.password} />
                <Button type="submit">Register {loading && <Spinner />}</Button>
            </form>
    )
}

export default RegisterForm

RegisterForm.defaultProps = {
    onSubmit: () => {}
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
}