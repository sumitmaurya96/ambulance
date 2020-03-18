import React from 'react';
import NavigationBar from '../navbar';
import LoginImage from './login.jpg';
import "./style.scss";


class LoginPage extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <NavigationBar/>
            <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={LoginImage} alt="Error"/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button className="btn" type="button">Login</button>
            </div>
            </div>
            </div>
        );
    }
}

export default LoginPage;