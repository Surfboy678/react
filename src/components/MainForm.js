import React from 'react';
import {Form, Button} from 'react-bootstrap';


class MainForm extends React.Component{
    render(){
      const  mystyle={
            top: "400px",
           paddingright: "100px",
            left: "1rem"
        }
        
        return(
            <Form>
  <Form.Group style={mystyle}  controlId="formBasicEmail">
    <Form.Label> System/Aplikacja/Zasób/Usługa</Form.Label>
    <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0">Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Control>
  </Form.Group>

  <Form.Group  controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        )
    }
}
export default MainForm;