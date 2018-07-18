import React, { Component } from 'react';
import './App.css';
import Main from './main';
import Clock from './Clock.js';
import Table from './Table';
class App extends Component {
  render() {
    const ShadowedLine = () => (
    <hr style={{ height: 12, border: 0 }} />
);
    return (
      <div className="App">
      <header className="App-header">
      <div className="div-left">

          <h1 className="App-title">Expense Record</h1>

      </div>
      <div className="div-right">
      <h1 className="App-title"><Clock /></h1>
      </div>

      </header>
      <Main />
      <ShadowedLine />
      <Table />
      <ShadowedLine />

      </div>
    );

  }

}


export default App;
