import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, des: "this is my first Task", isCompleted: false },
        { id: 2, des: "this is my second Task", isCompleted: false },
        { id: 3, des: "this is my third Task", isCompleted: false },
        { id: 4, des: "this is my fourth Task", isCompleted: false },
        { id: 5, des: "this is my fifth Task", isCompleted: false },
    ],
    reducers: {

    }
})

export const {} = todoSlice.actions;

export default todoSlice.reducer;