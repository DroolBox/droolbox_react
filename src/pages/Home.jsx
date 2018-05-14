
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Loader from '../components/concrete/Loader';

const Container = styled.div `
  width: 100%;
  text-align: center;
`;

export default class Home extends PureComponent {
  state = {
    loading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    return (
      <Container>
        <h1>Droolbox</h1>
      </Container>
    );
  }
}
