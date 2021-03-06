import React, { Component } from 'react';
// prop의 타입을 강제할 수 있음
import propTypes from 'prop-types';

// props -> 부모 컴포넌트가 설정하는 값, 컴포넌트 자신은 props를 읽기전용으로만 사용할 수 있음
// state ->

const MyComponent = props => {
  const { name, children, favoriteNumber } = props;

  return (
    <div>
      나의 이름 : {name}
      <br />
      children : {children}
      <br />
      likeNumber : {favoriteNumber}
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: propTypes.string,
  favoriteNumber: propTypes.number.isRequired,
};

class MyComponent2 extends Component {
  static defaultProps = {
    name: '기본 이름',
  };

  static propTypes = {
    name: propTypes.string,
    favoriteNumber: propTypes.number.isRequired,
  };

  render() {
    const { name, children, favoriteNumber } = this.props;

    return (
      <div>
        나의 이름 : {name}
        <br />
        children : {children}
        <br />
        likeNumber : {favoriteNumber}
      </div>
    );
  }
}

export { MyComponent, MyComponent2 };
