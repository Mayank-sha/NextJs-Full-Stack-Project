import { createTask } from "@/utils/actions";

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          placeholder="Type here..."
          name="content"
          required
          className="join-item input input-bordered w-full"
        />
        <button className="join-item btn btn-primary" type="submit">
          Create task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
