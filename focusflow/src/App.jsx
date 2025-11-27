import './App.css'
import Navbar from './components/Navbar'
import Timer from './components/Timer'
import TaskList from './components/TaskList'
import Stats from './components/Stats'
import { useState } from 'react'

function App() {
  const [completedFocusSessions, setCompletedFocusSessions] = useState(0)
  
  const handleFocusComplete = () => {
    setCompletedFocusSessions(prev => prev + 1)
  }

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <div className="content-grid">
          <Timer onFocusComplete={handleFocusComplete} />
          <TaskList />
          <Stats completedFocusSessions={completedFocusSessions} />
        </div>
      </main>
    </div>
  )
}

export default App