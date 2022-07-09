import { connect } from 'react-redux';
import { updateStep } from '../store/action';

function Steps(props) {
  function handleClick(step) {
    props.dispatch(updateStep(step))
  }
  return (
    <>
      <button
        className={props.steps === 5 ? "active" : "step-btn"}
        onClick={() => handleClick(5)}
      >
        5
      </button>
      <button
        className={props.steps === 10 ? "active" : "step-btn"}
        onClick={() => handleClick(10)}
      >
        10
      </button>
      <button
        className={props.steps === 15 ? "active" : "step-btn"}
        onClick={() => handleClick(15)}
      >
        15
      </button>
    </>
  )
}

function mapStateToProps(state) {
  return {
    steps: state.step
  }
}

export default connect(mapStateToProps)(Steps);