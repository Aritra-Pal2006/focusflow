import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/firebaseConfig';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  where, 
  orderBy, 
  onSnapshot 
} from 'firebase/firestore';
const TaskList = () => {
  const { user, loading: authLoading } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(true);
  // Fetch tasks from Firestore
  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }
    // Create a query for tasks belonging to the current user
    const q = query(
      collection(db, 'tasks'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );
    // Subscribe to real-time updates
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tasksData = [];
      querySnapshot.forEach((doc) => {
        tasksData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setTasks(tasksData);
      setLoading(false);
    }, (error) => {
      console.error('Error fetching tasks:', error);
      setLoading(false);
    });
    // Cleanup subscription
    return () => unsubscribe();
  }, [user]);
  // Add a new task
  const addTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim() || !user) return;
    try {
      await addDoc(collection(db, 'tasks'), {
        userId: user.uid,
        text: newTask.trim(),
        completed: false,
        createdAt: new Date()
      });
      setNewTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };
  // Toggle task completion
  const toggleTask = async (taskId, completed) => {
    try {
      const taskRef = doc(db, 'tasks', taskId);
      await updateDoc(taskRef, {
        completed: !completed
      });
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };
  // Delete a task
  const deleteTask = async (taskId) => {
    try {
      await deleteDoc(doc(db, 'tasks', taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  // Render loading state
  if (authLoading) {
    return (
      <div className="task-list-container">
        <h2>Task List</h2>
        <p>Loading user...</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="task-list-container">
        <h2>Task List</h2>
        <p>Loading tasks...</p>
      </div>
    );
  }

  return (
    <div className="task-list-container">
      <h2>Task List</h2>
      
      {!user ? (
        <p>Sign in to manage your tasks.</p>
      ) : (
        <>
          <form onSubmit={addTask} className="task-form">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task..."
              className="task-input"
            />
            <button type="submit" className="btn">Add</button>
          </form>
          
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id, task.completed)}
                  className="task-checkbox"
                />
                <span className="task-text">{task.text}</span>
                <button 
                  onClick={() => deleteTask(task.id)}
                  className="btn btn-secondary task-delete"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          
          {tasks.length === 0 && (
            <p className="no-tasks">No tasks yet. Add your first task above!</p>
          )}
        </>
      )}
    </div>
  );
};
export default TaskList;