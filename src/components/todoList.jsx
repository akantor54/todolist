import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Task from "./task";

const TodoList = () => {
  const tasks = useSelector((state) => state.todo);
  const todoDiv = useRef();
  useEffect(() => {
    todoDiv.current.scrollTop = todoDiv.current.scrollHeight;
  });
  return (
    <div ref={todoDiv} className="todolist">
      {tasks.map((t) => (
        <Task key={t.id} task={t} />
      ))}
    </div>
  );
};

export default TodoList;
