import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router,
    Route, 
    Link,
    Redirect
} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AuthContent1 from './Components/AuthContent1/AuthContent1';
import AuthContent2 from './Components/AuthContent2/AuthContent2';
import OpenContent1 from './Components/OpenContent1/OpenContent1';
import OpenContent2 from './Components/OpenContent2/OpenContent2';
import Login from './Components/Login/Login';

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb){
        this.isAuthenticated = true;
        setTimeout(cb, 100); //fake async
    },
    signout(cb){
        this.isAuthenticated = false;
        setTimeout(cb, 100); //fake async
    }
}

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true ?
        <Component {...props}/> : 
        <Redirect to={{
            pathname:'/Login',
            state: {from: props.location}
        }}/>
    )} />
)

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/Login" component={Login} />
        <PrivateRoute path="/AuthContent1" component={AuthContent1} />
        <PrivateRoute path="/AuthContent2" component={AuthContent2} />
        <Route path="/OpenContent1" component={OpenContent1} />
        <Route path="/OpenContent2" component={OpenContent2} />
      </div>
    </Router>
  )

  ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
