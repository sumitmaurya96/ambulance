import React from 'react';
import NavigationBar from '../navbar';
import LoginImage from './login.jpg';
import "./style.scss";


class RegisterPage extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <NavigationBar/>
            <div className="base-container">
            <div className="header">Register</div>
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
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="Usernamepassword" placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button className="btn" type="button">Register</button>
            </div>
            </div>
            </div>
        );
    }
}

export default RegisterPage;