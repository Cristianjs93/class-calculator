import { Component } from 'react';
import Calculator from './components/Calculator/Calculator';

type AppState = {};

type AppProps = {};
class App extends Component<AppProps, AppState> {
  constructor(props: {}) {
    super(props);
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
