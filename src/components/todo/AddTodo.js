import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";

import classes from "./AddTodo.module.css";

function AddTodo(props) {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const AddTodoHandler = (e)=> {
    e.preventDefault()
    // const TaskData = {
    //   id: Math.floor(Math.random() * 1000 + 1),
    //   des: task,
    //   isCompleted: false
    // };
    dispatch(addTodo({task: task}))
    // props.onAddTaskData(TaskData);
    setTask('');
}

  return (
    <div className={classes.content}>
      <input
        type="text"
        className={classes.input}
        placeholder="Add New Todo"
        onChange={(event)=>{setTask(event.target.value)}}
        value={task}
      />
      <button
        className={classes.btn}
        disabled={!task.trim().length}
        onClick={AddTodoHandler}
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
