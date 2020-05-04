import React from 'react';

// 에러를 잡아내는 컴포넌트
class ErrorBoundary extends React.Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }

  render() {
    if (this.state.error) return <div>에러가 발생띠</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
