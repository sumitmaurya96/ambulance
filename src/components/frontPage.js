import React from 'react';
import NavigationBar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Alert from 'react-bootstrap/Alert';
import Panic_attack from './images/Panic_attack.jpg';
import Bleeding from './images/bleeding.jpeg';
import Help from './images/help.png';
import Call from './images/call.jpeg';

class FrontPage extends React.Component{
    
    render(){
        return(
            <div>
            <NavigationBar/>
            <Jumbotron>
            <h1 style={{textAlign:'center'}}>Need an ambulance.Its just a click away now!</h1>
            <h3 style={{color:'lightcoral',textAlign:'center'}}>We will be there on time.</h3>
            <p style={{textAlign:'center'}}>
            <Button href="/book" variant="danger" style={{textAlign:'center'}}>Book Now</Button>
            </p>
            </Jumbotron>
            
            <h2 style={{color:'lightcoral',textAlign:'center'}}>Know what to do before we arrive !</h2>
            <h4 style={{textAlign:'center'}}>Your each decision makes a difference.</h4>
            
            <div style={{textAlign:'center'}}>
            <Figure style={{padding:'5px',margin:'3px'}}>
            <Figure.Image
            width={200}
            height={400}
            alt = "Stay Calm."
            src={Panic_attack}
            />
            <Figure.Caption style={{color:'black',textAlign:'center'}}>
            Stay Calm.<br/>Try to talk to the victim if they are concious.
            </Figure.Caption>
            </Figure>
            
            <Figure style={{padding:'5px',margin:'3px'}}>
            <Figure.Image
            width={200}
            height={200}
            alt = "Stay Calm."
            src={Bleeding}
            />
            <Figure.Caption style={{color:'black',textAlign:'center'}}>
            If victim is bleeding.<br/>Cover the bleeding with a clean cloth gently.
            </Figure.Caption>
            </Figure>
            
            <Figure style={{padding:'5px',margin:'3px'}}>
            <Figure.Image
            width={200}
            height={200}
            alt = "Stay Calm."
            src={Help}
            />
            <Figure.Caption style={{color:'black',textAlign:'center'}}>
            Ask for help.<br/>Call your neighbours.
            </Figure.Caption>
            </Figure>
            
            <Figure style={{padding:'5px',margin:'3px'}}>
            <Figure.Image
            width={200}
            height={200}
            alt = "Stay Calm."
            src={Call}
            />
            <Figure.Caption style={{color:'black',textAlign:'center'}}>
            Call the Ambulance helpline.<br/>Ambulance Helpline - 108 
            </Figure.Caption>
            </Figure>
            </div>
            <hr/>
            <Alert variant='success' style={{textAlign:'center'}}>
            Precaution is always better than cure.
            <Alert.Link href="https://www.nhp.gov.in/miscellaneous/first-aid" target="_blank">Click Here </Alert.Link>to learn more about first Aid.
            </Alert>
            
            </div>
            );
        }    
    }
    
    export default FrontPage;