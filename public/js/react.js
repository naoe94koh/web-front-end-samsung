/* -------------------------------------------------------------------------- */
/* React + ReactDOM                                                           */
/* -------------------------------------------------------------------------- */

{
  const { createElement: h } = React;

  const state = Object.freeze({
    headline: 'React 라이브러리',
    features: ['선언형 프로그래밍', '가상 DOM을 사용해 UI 업데이트'],
  });

  const headline = h('h2', null, state.headline);

  const list = h('ul', {
    children: state.features.map((feature, index) =>
      h('li', { key: index }, feature)
    ),
  });

  const app = h('div', { className: 'app' }, headline, list);

  const container = document.getElementById('react-root');

  const reactDomRoot = ReactDOM.createRoot(container);
  reactDomRoot.render(app);
}
