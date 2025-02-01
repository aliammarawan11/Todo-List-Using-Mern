import React, { useState } from 'react';
import { createTask } from '../api/tasksApi';

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = await createTask(title);
      onTaskCreated(newTask); 
      setTitle(''); 
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;