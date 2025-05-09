import { useState } from "react";

const AddTask = ({ onAdd, onEdit, editTask, setShowAddTask }) => {
  const [id] = useState(editTask.id || ""); // Removed `setId`
  const [text, setText] = useState(editTask.text || "");
  const [day, setDay] = useState(editTask.day || "");
  const [reminder, setReminder] = useState(editTask.reminder || false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }
    if (editTask) {
      onEdit({ id, text, day, reminder });
      setShowAddTask(false);
    } else {
      onAdd({ text, day, reminder });
    }

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="col-md-4 mx-auto" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input
        type="submit"
        value="Save Task"
        className="btn btn-info d-block mx-auto"
      />
    </form>
  );
};

export default AddTask;
