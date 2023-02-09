import { useDispatch } from "react-redux";

const Task = ({ task }) => {
  const dispach = useDispatch();

  let taskClass = "task ";
  if (task.done) {
    taskClass += "task-fini ";
  }
  return (
    <div className={taskClass}>
      <input
        type="checkbox"
        id="done"
        checked={task.done}
        onChange={() =>
          dispach({
            type: "todo/toggleTask",
            payload: task.id,
          })
        }
      />
      <p>{task.task}</p>
      <button
        onClick={() =>
          dispach({
            type: "todo/deleteTask",
            payload: task.id,
          })
        }
      >
        X
      </button>
    </div>
  );
};

export default Task;
