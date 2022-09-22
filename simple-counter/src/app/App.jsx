import classes from './App.module.css';
import { Counter } from '../components/Counter/Counter';

function App() {
  return (
    <div className={classes.container}>
      <Counter count={12} step={2} min={6} max={23} />
      <Counter step={3} />
      <Counter />
    </div>
  );
}

export default App;
