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
        return h(
          ListItem,
          { key: index, deleteIndex: index, onDelete: props.onDelete },
          feature
        );
      }),
    });
  };

  const ListItem = (props) => {
    return h(
      'li',
      null,
      props.children,
      h(DeleteButton, {
        deleteIndex: props.deleteIndex,
        onDelete: props.onDelete,
      })
    );
  };

  const DeleteButton = (props) => {
    let buttonLabel = props.label ?? '삭제';
    return h(
      'button',
      {
        type: 'button',
        'aria-label': buttonLabel,
        title: buttonLabel,
        style: { marginLeft: '8px' },
        onClick: () => props.onDelete(props.deleteIndex),
      },
      '×'
    );
  };

  class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        headline: 'React 라이브러리',
        features: ['선언형 프로그래밍', '가상 DOM을 사용해 UI 업데이트'],
      };

      // 인스턴스 메서드 this 바인딩 (this === 클래스 컴포넌트 인스턴스)
      this.deleteFeature = this.deleteFeature.bind(this);
    }

    render() {
      return h(
        'div',
        { className: 'app' },
        h(Headline, null, this.state.headline),
        h(List, { features: this.state.features, onDelete: this.deleteFeature })
      );
    }

    deleteFeature(deleteIndex) {
      // 🚨 this.state.features.splice(1, 1);

      // Thinking in React
      this.setState(
        {
          features: this.state.features.filter(
            (feature, index) => index !== deleteIndex
          ),
        },
        () => {
          console.log('update app state');
        }
      );
    }
  }

  const container = document.getElementById('react-root');

  const reactDomRoot = ReactDOM.createRoot(container);
  reactDomRoot.render(h(StrictMode, null, h(App)));
}
