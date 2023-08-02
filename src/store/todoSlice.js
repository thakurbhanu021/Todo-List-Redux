import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, des: "this is my first Task", isCompleted: true },
        { id: 2, des: "this is my second Task", isCompleted: false },
        { id: 3, des: "this is my third Task", isCompleted: false },
        { id: 4, des: "this is my fourth Task", isCompleted: false },
        { id: 5, des: "this is my fifth Task", isCompleted: false },
    ],
    reducers: {
        addTodo: (state,action)=> {
            const todo = {
                id: Math.floor(Math.random() * 1000 + 1),
                des: action.payload.task,
                isCompleted: false
            }
            state.push(todo);
        },
        toggleComplete: (state,action)=> {
        //    const index = state.findIndex((todo)=> todo.id === action.payload.id);
        //     state[index].isCompleted = action.payload.isCompleted;
        //     console.log(action.payload.isCompleted);

        state.map((todo)=>{
            if(todo.id === action.payload.id){
                todo.isCompleted = action.payload.isCompleted;
            } else return;
        })
        },
        deleteTodo:(state,action)=>{
            // console.log(action.payload.id)
            return state.filter((todo)=> todo.id !== action.payload.id )
        },
        editTodo: (state,action)=>{
            // console.log(action.payload.id);
            // console.log(action.payload.des);
            state.map((todo)=>{
                if(todo.id === action.payload.id){
                    todo.des = action.payload.des;
                } 
            })
        },
    //     filterTodoDataCompleted: (state,action)=> {
    //         const filteredtodos = [...state];
    //         if(action.payload.filterComplete === 'completed'){
    //             const newarr = filteredtodos.filter((todo)=> todo.isCompleted === true)
    //             return newarr
    //         }
    //          else if (action.payload.filterComplete === 'pending'){
    //             const newarr = filteredtodos.filter((todo)=> todo.isCompleted === false)
    //             return newarr
    //         } else return filteredtodos;
    //     },
    // //     filterTodoDataPending: (state,action)=> {
    // //         const filteredtodos = [...state];
    // //         if (action.payload.filterComplete === 'pending'){
    // //             const newarr = filteredtodos.filter((todo)=>todo.isCompleted === false)
    // //             return newarr;
    // //     }
    // // }
}
})

export const {addTodo,toggleComplete, deleteTodo, editTodo , filterTodoDataCompleted, filterTodoDataPending} = todoSlice.actions;

export default todoSlice.reducer;