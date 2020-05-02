import React, { Fragment } from 'react';
import './App.css';

function App() {
  const name = '리액트';

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16, // default -> px
  };

  // 굳이 괄호를 사용하지 않아도 됨. 한줄로 표현할 수 있는 JSX이면 한줄도 OK
  return (
    // JSX은 하나의 태그로 묶어야 함.
    <div className="App">
      {/* div를 사용하지 않을때는 Fragment를 사용해도 된다. 먼저 import 해야 함. */}
      <Fragment>
        <h1>{name} 안녕!</h1>
        <h2>잘 작동하니?</h2>
      </Fragment>

      <Fragment>
        {/* 삼항연산자를 사용해 필요한 내용만 렌더링할 수 있다. */}
        {name === '리액트' ? (
          <h1>리액트 입니다.</h1>
        ) : (
          <h2>리액트가 아닙니다.</h2>
        )}
      </Fragment>

      {/* 일반적인 if문처럼 굳이 다 쓰지 않아도 OK. */}
      <Fragment>{name === '리액트' && <h1>리액트입니다.</h1>}</Fragment>

      {/* Fragment에는 style사용이 안됨. */}
      <div style={style}>{name}</div>
      {/* 바로 사용할 수 도 있음. */}
      <div
        style={{
          backgroundColor: 'black',
          color: 'aqua',
          fontSize: '48px',
          fontWeight: 'bold',
          padding: 16,
        }}
      >
        {name}
      </div>

      {/* 보통 이렇게 외부파일을 import해서 class만 붙인다. */}
      <div className="react">{name}</div>

      <input type="text" />
    </div>
  );

  // 아래의 코드와 같이 사용하면 안된다.
  // falsy한 값인 0은 예외적으로 화면에 나타남.
  // return number && <div>내용</div>;
}

function App2() {
  // undefined를 return하는 상황을 만들면 안된다.
  // 하지만 JSX내부에서 undefined를 사용하는건 괜찮다.
  const name = undefined;
  return name || 'return값이 undefined입니다.';
}

export default App;
