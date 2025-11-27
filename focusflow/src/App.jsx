import './App.css'
import Navbar from './components/Navbar'
import Timer from './components/Timer'
import TaskList from './components/TaskList'
import Stats from './components/Stats'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="content-grid">
          <Timer />
          <TaskList />
          <Stats />
        </div>
      </main>
    </>
  )
}

export default App
