import React from 'react';
import { useAuth } from '../context/AuthContext';

const TaskList = () => {
  const { user } = useAuth();

  return (
    <div className="task-list-container">
      <h2>Task List</h2>
      {user ? (
        <p>Task management features will appear here when implemented.</p>
      ) : (
        <p>Sign in to manage tasks</p>
      )}
    </div>
  );
};

export default TaskList;