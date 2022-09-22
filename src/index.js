import RandomCountUp from './RandomCountUp.js';
import { getRandomMinMax } from './utils/getRandom.js';

const container = document.getElementById('root');
const reactDomRoot = ReactDOM.createRoot(container);

reactDomRoot.render(
  // <React.StrictMode>
  <RandomCountUp target={getRandomMinMax(33, 66)} />
  // </React.StrictMode>
);
