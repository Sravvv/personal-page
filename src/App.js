import React from 'react';
import { Column, Row } from 'simple-flexbox';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Main from './components/main/Main'

class App extends React.Component {
  state = { current: 'Landing' };
  render() {
    const { current } = this.state;
    return (
      <Row className="appContainer">
        <Sidebar current={current} onChange={(current) => this.setState({ current })} />
        <Column flexGrow={1} className="appMain">
          <Header title={current} />
          <Main current={current} />
        </Column>
      </Row>
    );
  }
}

export default App;
