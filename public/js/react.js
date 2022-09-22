/* -------------------------------------------------------------------------- */
/* React + ReactDOM                                                           */
/* -------------------------------------------------------------------------- */

{
  const { createElement: h, Component, StrictMode } = React;

  const Headline = (props) => <h2>{props.children}</h2>;

  const List = (props) => {
    return (
      <ul>
        {props.features.map((feature, index) => (
          <ListItem key={index} deleteIndex={index} onDelete={props.onDelete}>
            {feature}
          </ListItem>
        ))}
      </ul>
    );
  };

  const ListItem = (props) => (
    <li>
      {props.children}
      <DeleteButton deleteIndex={props.deleteIndex} onDelete={props.onDelete} />
    </li>
  );

  const DeleteButton = (props) => {
    let buttonLabel = props.label ?? '삭제';

    return (
      <button
        type="button"
        aria-label={buttonLabel}
        title={buttonLabel}
        style={{ marginLeft: '8px' }}
        onClick={() => props.onDelete(props.deleteIndex)}
      >
        ×
      </button>
    );
  };

  class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        headline: 'React 라이브러리',
        features: ['선언형 프로그래밍', '가상 DOM을 사용해 UI 업데이트'],
      };

      this.deleteFeature = this.deleteFeature.bind(this);
    }

    render() {
      return (
        <div className="app">
          <Headline>{this.state.headline}</Headline>
          <List features={this.state.features} onDelete={this.deleteFeature} />
        </div>
      );
    }

    deleteFeature(deleteIndex) {
      this.setState({
        features: this.state.features.filter(
          (feature, index) => index !== deleteIndex
        ),
      });
    }
  }

  const container = document.getElementById('react-root');

  const reactDomRoot = ReactDOM.createRoot(container);
  reactDomRoot.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
