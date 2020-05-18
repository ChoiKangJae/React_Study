import React from 'react';
import TodoInsert from './components/TodoInsert';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <div className="app-titleWrap">
        <h1 className="app-titleWrap__title">Todos</h1>
      </div>

      <TodoInsert></TodoInsert>
    </div>
  );
};

export default App;
