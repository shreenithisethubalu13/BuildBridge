import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import taskService from "../../services/taskService";

export const fetchTasks = createAsyncThunk(
    "tasks/fetchTasks",
    async () => {
        return await taskService.getAllTasks();
    }
);

const taskSlice = createSlice({

    name: "tasks",

    initialState: {

        items: [],

        loading: false,

        error: null

    },

    reducers: {},

    extraReducers: (builder) => {

        builder

            .addCase(fetchTasks.pending, (state) => {

                state.loading = true;

            })

            .addCase(fetchTasks.fulfilled, (state, action) => {

                state.loading = false;

                state.items = action.payload;

            })

            .addCase(fetchTasks.rejected, (state, action) => {

                state.loading = false;

                state.error = action.error.message;

            });

    }

});

export default taskSlice.reducer;