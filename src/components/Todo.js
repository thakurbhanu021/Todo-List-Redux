import { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { filterTodoDataCompleted, filterTodoDataPending } from "../store/todoSlice";



import AddTodo from "./todo/AddTodo";
import TodoList from "./todo/TodoList";
import classes from "./Todo.module.css";
import Card from "./ui/Card";

function Todo() {
  // const dispatch = useDispatch();
  const todos = useSelector(state=>state.todos);
  // filter add all , pending , completed
  // strikethrough .... done!!!
  // edit done

  const [isCompleted, setisCompleted] = useState("");

  // const [updatedTaskData, setUpdatedTaskData] = useState([
  //   { id: 1, des: "this is my first Task", isCompleted: false },
  //   { id: 2, des: "this is my second Task", isCompleted: false },
  //   { id: 3, des: "this is my third Task", isCompleted: false },
  //   { id: 4, des: "this is my fourth Task", isCompleted: false },
  //   { id: 5, des: "this is my fifth Task", isCompleted: false },
  // ]);

  // const addTaskData = (TaskData) => {
  //   // setUpdatedTaskData((prev) => {
  //   //   const newData = [...prev];
  //   //   newData.push(TaskData);
  //   //   return newData;
  //   // });
  // };

  // const removeTask = (index) => {
  // setUpdatedTaskData(prev => {
  //   const newData = [...prev];
  //   newData.splice(index, 1);
  //   return newData
  // })

  // const removeTask = (id) => {
  //   setUpdatedTaskData((prev) => prev.filter((data) => data.id !== id));
  // };

  // const strikeHandler = (val, id) => {
  //   console.log(val, id);
  //   setUpdatedTaskData((prev) => {
  //     const newData = [...prev];
  //     // if(newData.find(data=>data.id === id)){}
  //     newData.map((item) => {
  //       if (item.id === id) {
  //         return (item.isCompleted = val);
  //       } else {
  //         return item;
  //       }
  //     });
  //     console.log(newData);
  //     return newData;
  //   });
  // };

  // const onAddEditInputHandler = (val, id) => {
  //   // console.log(val, id);
  //   setUpdatedTaskData((prev) => {
  //     const newData = [...prev];
  //     newData.map((item) => {
  //       if (item.id === id) {
  //         return (item.des = val);
  //       } else {
  //         return item;
  //       }
  //     });
  //     return newData;
  //   });
  // };

  const completedHandler = () => {
    // const data = [...updatedTaskData];
    // const completedTask = data.filter((item) => {
    //   return item.isCompleted === !isCompleted;
    // });
    // setUpdatedTaskData(completedTask);

    setisCompleted("completed");

    // dispatch(filterTodoDataCompleted({filterComplete: 'completed'}))
  };

  const pendingHandler = () => {
    // const data = [...updatedTaskData];
    // const pendingTask = data.filter((item) => {
    //   return item.isCompleted === isCompleted;
    // });
    // setUpdatedTaskData(pendingTask);

    setisCompleted("pending");

    // dispatch(filterTodoDataCompleted({filterComplete: 'pending'}))
  };
  const allTaskHandler = () => {
    setisCompleted("all");

    // dispatch(filterTodoData({filterComplete: 'all'}))
  };

  const filteredTaskHandler = () => {
    if (isCompleted === "completed")
      return todos.filter((item) => item.isCompleted === true);
    if (isCompleted === "pending")
      return todos.filter((item) => item.isCompleted === false);
    return todos;
  };

  const filteredData = filteredTaskHandler();

  return (
    <section className={classes.content}>
      <h1 className={classes.heading}>Todo List Application</h1>
      <Card>
        <div className={classes.filter}>
          <span>
            <i className="fa fa-align-justify" aria-hidden="true"></i> Filter
          </span>
          <div>
            <span className={classes.fil} onClick={allTaskHandler}>
              <i className="fa fa-list" aria-hidden="true"></i> All
            </span>
            <span className={classes.fil} onClick={pendingHandler}>
              <i className="fa fa-times-circle-o" aria-hidden="true"></i>{" "}
              Pending
            </span>
            <span className={classes.fil} onClick={completedHandler}>
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>{" "}
              Completed
            </span>
          </div>
        </div>
        {filteredData.length ? (
          <TodoList
            todoData={filteredData}
            // onRemove={removeTask}
            // onStrike={strikeHandler}
            // OnAddEditInput={onAddEditInputHandler}
          />
           ): <p className={classes.para}>Add task to see list</p> }  
      </Card>
      <AddTodo 
      // onAddTaskData={addTaskData} 
      />
    </section>
  );
}

export default Todo;
