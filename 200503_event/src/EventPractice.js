import React from 'react';

class EventPractice extends React.Component {
  state = {
    message: '',
    username: '',
  };

  // 클래스의 임의메소드가 특정 HTML 요소의 이벤트로 등록되는 과정에서
  // 메소드와 this의 관계가 끊어짐
  // 그렇기에 this가 누구인지 알 수 없게됨
  // 그래서 this가 컴포넌트 자신임을 제대로 가리키기 위해 바인딩을 진행함
  // 바벨의 transform-class-properties 문법을 사용하면 더욱 간결하게 표현 가능
  // this.handleChange = this.handleChange.bind(this);
  // this.handleClick = this.handleClick.bind(this);
  // this.keyUpEvent = this.keyUpEvent.bind(this);

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(`${this.state.username} : ${this.state.message}`);
    this.setState({
      message: '',
      username: '',
    });
  };

  keyUpEvent = e => {
    if (e.keyCode === 13) {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
          onKeyUp={this.keyUpEvent}
        />

        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyUp={this.keyUpEvent}
        />

        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
