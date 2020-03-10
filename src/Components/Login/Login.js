import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import AppContext from '../../AppContext';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirectToReferrer: false
        }
        this.login = this.login.bind(this);
    }

    login(event, context){
        debugger;
        const user = { Name: 'Test User'}
        context.setUser(user);
        //alert('about to log in');
        this.setState({redirectToReferrer:true});
    }

    render() {
        const {
            redirectToReferrer
        } = this.state;

        const {
            from
        } = this.props.location.state || { from: { pathname: '/'}};
        
        if(redirectToReferrer){
            return (
                <Redirect to={from} />
            )
        }

        return (
            <AppContext.Consumer>
                {context => (
                    <div>
                        <div>You must log in to view {from.pathname}</div>
                        <button onClick={(e) => this.login(e, context)}>LOGIN</button>
                    </div>
                )}
            </AppContext.Consumer>
        )
    }
}
