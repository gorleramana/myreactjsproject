import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/Greet';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  /**
   * you can import as two ways like below, but if you are exporting as const export .. 
   * you can only import the component with the same name
   */
  return (
    <div className="App">
      <Greet name="Raj"></Greet>
      <MyComponent name="Chiru"></MyComponent>
      <Welcome name = "Powerstar"></Welcome>
      <Hello></Hello>
      <Message></Message>
    </div>
  );
}

export default App;
