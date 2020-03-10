import AppContext from './AppContext';
import React from 'react';

class AppProvider extends React.Component {
    state = {
        user: {}
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    user: this.state.user,
                    setUser: user => {
                        debugger;
                        const stateUser = Object.assign({}, this.state.user);
                        this.setState({
                            user
                        });
                    },
                }}
            >
            {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;