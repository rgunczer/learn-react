import { connect } from 'react-redux';
import Counter from './Counter';

// map redux state to component props
function mapStateToProps(state) {
  return {
    countValue: state.count
  };
}

// action
var increaseAction = { type: 'increase' };
var decreaseAction = { type: 'decrease' };

// map redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    increaseCount: function() {
      return dispatch(increaseAction);
    },
    decreaseCount: function() {
      return dispatch(decreaseAction);
    }
  }
}

// the HOC Higher Order Component
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default connectedComponent;