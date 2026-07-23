import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: user ? user : null,
    loading: false,
    error: null,
};

export const login = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            return await authService.login(credentials);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                "Authentication failed. Check your credentials."
            );
        }
    }
);

export const register = createAsyncThunk(
    "auth/register",
    async (data, thunkAPI) => {
        try {
            return await authService.register(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                "Registration failed. Username or email might be taken."
            );
        }
    }
);

const authSlice = createSlice({
    name: "auth",

    initialState,

    reducers: {

        logout: (state) => {

            localStorage.removeItem("user");
            localStorage.removeItem("token");
            localStorage.removeItem("role");

            state.user = null;
        },

        loginSuccess: (state, action) => {

            state.user = action.payload;
            state.loading = false;
            state.error = null;
        }

    },

    extraReducers: (builder) => {

        builder

            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })

            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(register.pending, (state) => {
                state.loading = true;
            })

            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })

            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

    }

});

export const { logout, loginSuccess } = authSlice.actions;

export default authSlice.reducer;