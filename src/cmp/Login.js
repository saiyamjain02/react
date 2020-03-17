import React, { Component } from 'react';
import './Login.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting, " + this.state.username);
    }
    myChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    render() {
        return (
            <div>
                <form className="container_login" onSubmit={this.mySubmitHandler} >
                    <div className="wrap_login">
                        <h1>Login</h1>
                        <div className="wrap-input100 validate-input m-b-23" data-
                            validate="Username is reauired">
                            <div className="label-input100">Username</div>
                            <div className="input_container" >
                                <div className="user_symbol"></div>
                                <input type="text" className="input100" placeholder="Type your username"
                                    onChange={this.myChangeHandler} />
                            </div>
                        </div>
                        <div className="wrap-input100 validate-input m-b-23" data-validate="Password is reauired">
                            <div className="label-input100">Password</div>
                            <div className="input_container" >
                                <div className="pass_symbol"></div>
                                <input type="password" className="input100" placeholder="Type your password"
                                    onChange={(e) => { this.setState({ password: e.target.value }) }} />
                            </div>
                        </div>
                        <button className="login" type="submit">Login</button>
                        {/* <button className="login" type="submit">Login</button> //onClick={this.login()}>Login</button> */}
                    </div>
                </form>
            </div>

        )
    }
}
export default Login;