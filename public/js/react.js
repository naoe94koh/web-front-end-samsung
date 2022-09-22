/* -------------------------------------------------------------------------- */
/* React + ReactDOM                                                           */
/* -------------------------------------------------------------------------- */

{
  const { createElement: h, Component, StrictMode } = React;

  function Headline(props) {
    return h('h2', null, props.children);
  }

  const List = (props) => {
    return h('ul', {
      children: props.features.map((feature, index) => {
        return h(ListItem, { key: index }, feature);
      }),
    });
  };

  const ListItem = (props) => {
    return h('li', null, props.children);
  };

  class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        headline: 'React 라이브러리',
        features: ['선언형 프로그래밍', '가상 DOM을 사용해 UI 업데이트'],
      };
    }

    render() {
      return h(
        'div',
        { className: 'app' },
        h(Headline, null, this.state.headline),
        h(List, { features: this.state.features })
      );
    }
  }

  const container = document.getElementById('react-root');

  const reactDomRoot = ReactDOM.createRoot(container);
  reactDomRoot.render(h(StrictMode, null, h(App)));
}
