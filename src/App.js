import React, { Component, createContext } from 'react';
import Context from './store';
import './App.css';
import Counter from './components/counter';

const { Provider } = Context;


class App extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <Provider value={{
        state: this.state,
        actions: {
          increment: () => this.setState({ count: this.state.count + 1 }),
        }
      }}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
