import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";
import { useSelector } from "react-redux";


function TodoList(props) {
  const todoData = useSelector((state)=> state.todos);

 const removeHandler=(id)=>{
  props.onRemove(id);
 }
 const strikeHandler=(val,id)=>{
  props.onStrike(val,id);
 }
 const addInputEditHandler=(val,id)=>{
  props.OnAddEditInput(val,id);
 }
  return (
      <ul className={classes.content}>
        {todoData.map((ListData) => (
              <TodoItem
                id={ListData.id}
                des={ListData.des}
                isCompleted={ListData.isCompleted}
                // key={index}
                key={ListData.id}
                // remove={() => props.remove(index)}
               remove={removeHandler}
               strike={strikeHandler}
               addInputEdit={addInputEditHandler}
              />
            ))
          }
      </ul>
    
  );
}

export default TodoList;
