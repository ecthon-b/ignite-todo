import '../src/styles/global.css';
import { Header } from './components/Header';
import { ShowTodos } from './components/ShowTodos';

export function App() {
  return (
    <div>
      <Header />
      <ShowTodos />
    </div>
  )
}
