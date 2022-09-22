import RandomCountUp from './RandomCountUp.js';
import { getRandomMinMax } from './utils/getRandom.js';
var container = document.getElementById('root');
var reactDomRoot = ReactDOM.createRoot(container);
reactDomRoot.render(React.createElement(RandomCountUp, {
  target: getRandomMinMax(33, 66)
}));
//# sourceMappingURL=index.js.map