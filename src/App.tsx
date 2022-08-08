import '../src/styles/global.css';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';

export function App() {
  return (
    <div>
      <Header />
      <AddTask />
    </div>
  )
}
