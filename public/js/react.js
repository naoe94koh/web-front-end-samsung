/* -------------------------------------------------------------------------- */
/* React + ReactDOM                                                           */
/* -------------------------------------------------------------------------- */

// HTMLDivElement  vs. <div></div>
// React Component vs. React Element

// React Component Type
// React 요소를 재사용
// - class (stateful): Container Component
// - function (stateless): Presentational Component

{
  const { createElement: h, Component, StrictMode } = React;

  // Headline 컴포넌트 → `headline` React 요소를 생성
  // React 함수 컴포넌트
  // 네이밍 컨벤션 (파스칼 케이스)
  function Headline(props) {
    return h('h2', null, props.children);
  }

  // List 컴포넌트 → `list` React 요소를 생성
  const List = (props) => {
    return h('ul', {
      children: props.features.map((feature, index) => {
        // ListItem 컴포넌트 → listItem 요소 생성
        return h(ListItem, { key: index }, feature);
      }),
    });
  };

  // ListItem 컴포넌트 → `listItem` React 요소를 생성
  const ListItem = (props) => {
    return h('li', null, props.children);
  };

  // App 컴포넌트 → `app` React 요소를 생성
  // 컴포넌트 상태(state) 관리 (캡슐화)
  class App extends Component {
    constructor(props) {
      super(props);
      // 불변 상태 객체
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
