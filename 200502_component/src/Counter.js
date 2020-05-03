import React, { Component } from 'react';

class Counter extends Component {
  // 컴포넌트에 state를 설정할 때는 constructor 메소드를 사용함
  constructor(props) {
    // 부모 class의 constructor를 호출함 -> 왜? 초기셋팅값을 조정할 수 있음
    super(props);
    // state의 초깃값 설정하기
    // 객체형식이어야 함
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

// 이런 방식도 있다!
class Counter2 extends Component {
  // 이렇게 작성할 경우 constructor를 사용하지 않아도 됨
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다
            // 첫번째 인자는 현재 state, 두 번째 인자는 해당 컴포넌트의 props
            // this.setState(prevState => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
            // this.setState(prevState => ({
            //   number: prevState.number + 1,
            // }));
            // 위 두 코드는 똑같은 행동을 함

            // setState로 값설정을 한 후 특정작업? -> callback
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('cb');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export { Counter, Counter2 };
