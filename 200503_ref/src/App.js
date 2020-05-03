import React from 'react';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ValidationSample></ValidationSample>
        <div>
          <ScrollBox
            ref={ref => {
              this.scrollBox = ref;
            }}
          ></ScrollBox>
        </div>
        <button
          onClick={() => {
            this.scrollBox.scrollToBottom();
          }}
        >
          맨밑으로
        </button>
      </div>
    );
  }
}

export default App;
