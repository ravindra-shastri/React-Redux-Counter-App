import { connect } from 'react-redux';
import {updateMaxValue} from '../store/action';

function MaxValue(props) {
  function handleMaxValue(maxvalue) {
    props.dispatch(updateMaxValue(maxvalue));
  }
  return (
    <>
      <button className={props.maxvalue === 15 ? "active" : "step-btn"}
        onClick={() => handleMaxValue(15)}>
        15
      </button>
      <button className={props.maxvalue === 100 ? "active" : "step-btn"}
        onClick={() => handleMaxValue(100)}>
        100
      </button>
      <button className={props.maxvalue === 200 ? "active" : "step-btn"}
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