/* global React */

class RandomCountUp extends React.Component {
  static defaultProps = {
    count: 0,
    step: 1,
    target: 100,
    fps: 60,
  };

  state = {
    // derived state from props
    count: this.props.count,
  };

  render() {
    const { count } = this.state;

    let willAssignAnimateStopClassName = '';

    if (count >= this.props.target) {
      willAssignAnimateStopClassName = 'animate-none';
    }

    return (
      <div className="flex flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0">
        <output
          className={`text-[50vw] lg:text-[30vh] font-thin animate-pulse-fast ${willAssignAnimateStopClassName}`}
        >
          {count}
        </output>
      </div>
    );
  }

  increment() {
    this.setState({
      count: this.state.count + this.props.step,
    });
  }

  clearId = 0;

  animateStart() {
    this.clearId = setInterval(() => {
      this.increment();
    }, 1000 / this.props.fps);
  }

  animateStop() {
    clearInterval(this.clearId);
  }

  componentDidMount() {
    // 부수 효과 : side effects
    // 문서 제목 업데이트
    document.title = `(${this.props.target}) ${document.title}`;
    this.animateStart();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count >= this.props.target) {
      this.animateStop();
    }
  }
}

export default RandomCountUp;
