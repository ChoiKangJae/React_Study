import React from 'react';
import { MyComponent, MyComponent2 } from './MyComponent';
import { Counter, Counter2 } from './Counter';
import Say from './Say';

const App = () => {
  return (
    <div className="App">
      <MyComponent name="chlrkdwo" favoriteNumber={3}>
        리액트
      </MyComponent>

      <MyComponent2 name="최강재" favoriteNumber={1}>
        리액트
      </MyComponent2>

      <Counter></Counter>
      <Counter2 name="chlrdwo" favoriteNumber={1}></Counter2>

      <Say></Say>
    </div>
  );
};

export default App;
