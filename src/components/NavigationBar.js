import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class NavigationBar extends React.Component{
    render(){
        const mystyle = {
            color: "white",
            backgroundColor: "pink",
            padding: "10px",
            fontFamily: "Arial"
          };
        return(
            <Navbar style = {mystyle}>
                <Navbar.Brand>Daily Routines</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home"></Nav.Link>
                    <Nav.Link href="#features"></Nav.Link>
                    <Nav.Link href="#pricing"></Nav.Link>
                    </Nav>
            </Navbar>
        );
    }

}
export default NavigationBar;