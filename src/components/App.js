import { connect } from 'react-redux';
import { increment, decrement, reset } from '../store/action';
import Header from './Header';
import Steps from './Steps';
import MaxValue from './MaxValue';

function App(props) {
  return (
    <div className="App">
      <Header />
      <h1 className="count">
        {props.count}
      </h1>
      <div className="extension">
        <div className="step">
          <h2> Steps </h2>
          <Steps />
        </div>
        <div className="step">
          <h2> Max Value</h2>
          <MaxValue />
        </div>
      </div>
      <button
        className="btn"
        onClick={() => props.dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => props.dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="btn"
        onClick={() => props.dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.value
  }
}

export default connect(mapStateToProps)(App);
