import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../shared/api/auth'

export const signup = createAsyncThunk(
    'auth/signup',
    async (data, { rejectWithValue }) => {
        try {
            const res = await api.signup(data)
            return res

        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error)
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const res = await api.login(data)
            return res

        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error)
        }
    }
)