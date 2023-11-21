import Home from './src/pages/Home';
import { TasksContext } from './src/context/TasksContext';

export default function App() {
  return (
    <TasksContext.Provider value={{ id: '1', title: 'Task 01'}}>
      <Home />
    </TasksContext.Provider>
  );
}
