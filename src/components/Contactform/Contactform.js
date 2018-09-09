import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Contactform.css';

export default class Contactform extends React.Component {
  render() {
    return (
        <div className='form-container'>
          <Form>
            <a className='email-title'>Email Us</a><br/><br/>
            <FormGroup>
              <Input type="email" name="email" id="exampleEmail" placeholder="Example@email.com" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Message</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
    );
  }
}
