import { useState } from "react";
import "./Todo.css";
const Todo = props => {
  const { task, completed, editing, id } = props.todo;

  const [editTask, setEditTask] = useState({ task });
  const handleChange = e => {
    setEditTask({
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = e => {
    e.preventDefault();
    props.editItem(id);
  };

  const handleSave = e => {
    e.preventDefault();
    props.saveEdit(editTask.task, id);
  };

  const handleComplete = e => {
    e.preventDefault();
    props.markComplete(id, completed);
  };

  let styles = {
    textDecoration: completed ? "line-through" : "none",
    cursor: "pointer",
  };

  return (
    <div id={id} className="Todo">
      <span style={styles} onClick={e => handleComplete(e)}>
        {editing ? (
          <input value={editTask.task} name="task" onChange={handleChange} />
        ) : (
          task
        )}
      </span>
      <span>
        {editing ? (
          <button onClick={e => handleSave(e)}>Save</button>
        ) : (
          <button onClick={e => handleEdit(e)}>Edit</button>
        )}
        <button onClick={() => props.removeItem(id)}>X</button>
      </span>
    </div>
  );
};

export default Todo;
