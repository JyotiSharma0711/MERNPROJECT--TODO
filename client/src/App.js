import './App.css';

// components
import Header from './components/Header';
import SearchComponent from './components/SearchComponent';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Header />
      <SearchComponent/>
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
