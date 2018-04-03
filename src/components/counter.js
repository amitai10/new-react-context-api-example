import React, { Component } from 'react';
import styled from 'styled-components';
import Context from '../store';

const Container = styled.div`
  display: flex;
`;

const Number = styled.span`
`;

const Button = styled.button`
`;

const { Consumer } = Context;
class Counter extends Component {
  render() {
    return (
      <Consumer>
        {(context) => 
           (
          <Container>
            <Number>{context.state.count}</Number>
            <Button onClick={context.actions.increment}>+</Button>
          </Container>
          )}
      </Consumer>
    );
  }
}

export default Counter;