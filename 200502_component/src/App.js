import React from 'react';
import { MyComponent, MyComponent2 } from './MyComponent';

const App = () => {
  return (
    <div className="App">
      <MyComponent name="chlrkdwo" favoriteNumber={3}>
        리액트
      </MyComponent>

      <MyComponent2 name="최강재" favoriteNumber={1}>
        리액트
      </MyComponent2>
    </div>
  );
};

export default App;
