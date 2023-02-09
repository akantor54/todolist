import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Form = () => {
  const { handleSubmit, reset, register } = useForm();
  const dispach = useDispatch();

  const onSubmit = (data) => {
    dispach({
      type: "todo/addTask",
      payload: data.task,
    });
    reset();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="task"
          name="task"
          placeholder="Entre une tache a faire"
          {...register("task")}
        />
      </form>
    </div>
  );
};

export default Form;
