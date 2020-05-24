import React from 'react';
import './TodoList.scss';

function TodoList() {
  return (
    <div className="TodoList">
      <div className="TodoList__inputWrap">
        <label htmlFor="radio1">All</label>
        <input type="radio" name="radio" id="radio1" />

        <label htmlFor="radio2">Active</label>
        <input type="radio" name="radio" id="radio2" />

        <label htmlFor="radio3">Completed</label>
        <input type="radio" name="radio" id="radio3" />
      </div>

      <div className="TodoList__list"></div>
    </div>
  );
}

export default TodoList;
