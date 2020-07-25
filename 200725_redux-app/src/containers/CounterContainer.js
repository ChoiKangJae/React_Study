import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return <Counter number={number} onIncrease={increase} onDcrease={decrease} />;
};

// state는 현재 스토어가 지니고 있는 상태를 가리킴.
// const mapStateToProps = state => ({
//   number: state.counter.number,
// });
//
// store의 내장 함수인 dispatch를 파라미터로 가져옴.
// const mapDispatchToProps = dispatch => ({
//   // 임시 함수
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// 첫 번째 파라미터와 두 번째 파라미터에서 반환하는 객체 내부의 값들은
// 컴포넌트의 props로 전달됨.
export default connect(
  state => ({
    number: state.counter.number,
  }),
  // 이와 같이 작성하면 connect함수가 내부적으로
  // bindActionCreators 작업을 대신해 줌.
  {
    increase,
    decrease,
  },
)(CounterContainer);
