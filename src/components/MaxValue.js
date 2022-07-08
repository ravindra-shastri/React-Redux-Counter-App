import { connect } from 'react-redux';
import {updateMaxValue} from '../store/action';

function MaxValue(props) {
  function handleMaxValue(max) {
    props.dispatch(updateMaxValue(max));
  }
  return (
    <>
      <button className={props.max === 15 ? "active" : "step-btn"}
        onClick={() => handleMaxValue(15)}>
        15
      </button>
      <button className={props.max === 100 ? "active" : "step-btn"}
        onClick={() => handleMaxValue(100)}>
        100
      </button>
      <button className={props.step === 200 ? "active" : "step-btn"}
        onClick={() => handleMaxValue(200)}>
        200
      </button>
    </>
  )
}

function mapStateToProps(state) {
  return {
    maxvalue: state.maxvalue
  }
}

export default connect(mapStateToProps)(MaxValue);