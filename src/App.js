import React, { Component } from 'react';
import styled from 'styled-components'
import SpeechRecognition from './components/SpeechRecognition';
import { Text, Heading } from './Typography';
import Sidebar from './components/Sidebar';
import './App.css';

window.speechHandler = new SpeechRecognition();
const Wrapper = styled.div`
  display: block;
  position: relative;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #fefefe;
`
const Header = styled.header`
  align-items: center;
  background-color: #333;
  color: #fefefe;
  box-shadow: 0 1px 3px rgba(0,0,0,0.48);
  display: flex;
  height: 68px;
  padding-left: 1em;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    }
  }

  render() {
    return (
      <Wrapper>
        <Sidebar isOpen={this.state.sidebarOpen}></Sidebar>
        <Header>
          <Heading level={1} size={28}>Speech to note</Heading>
        </Header>
        <main style={{"padding": 16}}>
          <Text size="18">To get started, edit <code>src/App.js</code> and save to reload.</Text>
        </main>
      </Wrapper>
    );
  }
}

export default App;
