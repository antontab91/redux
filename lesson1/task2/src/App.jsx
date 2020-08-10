import React, { Component } from "react";
import Header from "./Header";
import { UserContext, user } from './context';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: user.name,
                avatar_url: user.avatar_url,
            }
        }

    }

    render() {
        return (
            <div className="page">
                <UserContext.Provider value={this.state.user}>
                    <Header />
                </UserContext.Provider>
            </div>
        )
    }
}

export default App;


//1.Передаем в state данные для контекста (myName) -state = {fullName: myName};
//2.Заворачиваем нужную компоненту в Provider поставив перед ним контекст(UserContext) - UserContext.Provider.
//3. В Provider передаем данные из state - value={this.state}