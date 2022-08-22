import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            agree:false,
            contactType:'Tel.',
            message:'',
            touched:{
              firstname:false,
              lastname:false,
              telnum:false,
              email:false,
            }
        }
       // this.handleSubmit=this.handleSubmit.bind(this);
        //this.handleInputChange=this.handleInputChange.bind(this);
    }

    handleInputChange=event=>{
        const target=event.target;
        const value=target.value;
        const name= target.name;
        this.setState({
            [name]:value
        });


    }
    handleSubmit=event=>{
        alert('Your contact detail is: '+JSON.stringify(this.state));
        event.preventDefault();

    }


  render() {
    return (
        <div className='container'>
            <div className='row row-content'>
                <div className='col-12'>
                    <h3>Send us Your Feedback</h3>
                </div>
            </div>
      <Form className='container' onSubmit={this.handleSubmit}>


        <FormGroup row>
          <Label for="firstname" md={2}>First Name</Label>
          <Col md={10}>
            <Input type="text" required name="firstname" id="firstname" placeholder="First Name" value={this.state.firstname}
            onChange={this.handleInputChange} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="lastname" md={2}>Last Name</Label>
          <Col md={10}>
            <Input type="lastname" required name="lastname" id="lastname" placeholder="Last Name" value={this.state.lastname}
            onChange={this.handleInputChange} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="telnum" md={2}>Contact Tel.</Label>
          <Col md={10}>
            <Input type="tel" required name="telnum" id="telnum" placeholder="Tel. Number" value={this.state.telnum}
            onChange={this.handleInputChange} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="firstname" md={2}>Email</Label>
          <Col md={10}>
            <Input type="email" required name="email" id="email" placeholder="Enter Your Email" value={this.state.email}
            onChange={this.handleInputChange} />
          </Col>
        </FormGroup>

        <FormGroup row>

          <Col md={{ size:6, offset:2 }}>
              <FormGroup check>
                  <Label check>
                    <Input type='checkbox' name='agree' checked={this.state.agree}
                    onChange={this.handleInputChange}/>{' '}
                    <strong>May we Contact You?</strong>
                  </Label>
              
              </FormGroup>  
          </Col>


        </FormGroup>


        <FormGroup row>
          <Label for="feedback" md={2}>Your Feedback</Label>
          <Col md={10}>
            <Input type="textarea" required name="message" id="message" rows='12' value={this.state.message}
            onChange={this.handleInputChange}/>
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col md={{ size: 10, offset: 2 }}>
            <Button type='submit' color='primary'>Send Feedback</Button>
          </Col>
        </FormGroup>
      </Form>
      </div>
    );
  }
}


export default Contact;


