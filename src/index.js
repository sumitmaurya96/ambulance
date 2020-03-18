import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FrontPage from './components/frontPage';
import MapPage from './components/map';
import AboutPage from './components/about';
import ContactPage from './components/contact';
import Notfound from './components/notfound404';
import LoginPage from './components/login/login';
import RegisterPage from './components/login/register';
import 'leaflet/dist/leaflet.css';


const routing = (
    <Router>
        <div>
            <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/home" component={FrontPage}/>
            <Route path="/book" component={MapPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/signUp" component={RegisterPage}/>        
            <Route component={Notfound}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if(module.hot){
    module.hot.accept();
}