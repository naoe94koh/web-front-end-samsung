import './App.css';
import { Counter } from '../components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter count={12} step={2} min={6} max={23} />
    </div>
  );
}

export default App;
