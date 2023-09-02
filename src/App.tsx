import { Component } from 'react';
import Calculator from './components/Calculator/Calculator';

type AppState = {
  count: number;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <Calculator />
      </>
    );
  }
}

export default App;
