import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import AppProvider from './AppProvider';

class App extends React.Component{

  render(){
    return (
      <AppProvider>
        <nav>
          <Link to="/AuthContent1">Go To Auth Content 1</Link>
          <br/>
          <Link to="/AuthContent2">Go To Auth Content 2</Link>
          <br/>
          <Link to="/OpenContent1">Go To Open Content 1</Link>
          <br/>
          <Link to="/OpenContent2">Go To Open Content 2</Link>
        </nav>
      </AppProvider>
    );
  }
}

export default App;
