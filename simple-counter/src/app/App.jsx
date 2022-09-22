import classes from './App.module.css';
import { Counter } from '../components/Counter/Counter';
import { Counter2 } from '../components/Counter2/Counter2'

function App() {
  return (
    <div className={classes.container}>
      <Counter count={12} step={2} min={6} max={23} />
      <Counter step={3} />
      <Counter> conunt={-1}</Counter>
      <Counter2 contenthead={"con"} size={40}/>
    </div>
  );
}

export default App;
