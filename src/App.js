import Headline from './components/Headline.js';
import List from './components/List.js';

class App extends React.Component {
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

export default App;
