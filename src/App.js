import React, { Component } from 'react';

import NavBar from './components/concrete/NavBar';

class App extends Component {
  render() {
    return (
      <main className="py-4">
        <div className="container">
          <NavBar />
        </div>
      </main>
    );
  }
}

export default App;
