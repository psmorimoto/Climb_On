import React from 'react';
import ClimbGrades from './ClimbGrades.jsx';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class AddClimb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      climbType: 'Bouldering',
      climbGrade: '',
      climbLocation: '',
      climbDescription: '',
    }
    this.handleModal = this.handleModal.bind(this);
    this.handleClimbType = this.handleClimbType.bind(this);
  }

  handleModal() {
    this.setState({showModal: true});
  }

  handleClimbType(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    if (!this.state.showModal) {  
      return (
        <div>
          <div onClick={this.handleModal}>+ Add a Climb</div>
        </div>
      )
    } else {
      return (
        <div>
          <Form>
            <FormGroup>
              <Label for="exampleClimbType">Climbing Type</Label>
              <Input type="select" name="climbType" id="SelectClimbType" onChange={this.handleClimbType}>
                <option>Bouldering</option>
                <option>Top Rope</option>
                <option>Lead</option>
                </Input>
            </FormGroup>
            <ClimbGrades climbType={this.state.climbType} handleClimbType={this.handleClimbType} />
            <FormGroup>
              <Label for="ClimbLocation">Location</Label>
              <Input type="text" name="climbLocation" onChange={this.handleClimbType}></Input>
            </FormGroup>
            <FormGroup>
              <Label for="ClimbDescription">Description/Notes</Label>
              <Input type="textarea" name="climbDescription" onChange={this.handleClimbType}></Input>
            </FormGroup>
          </Form>

          <div>
            {this.state.climbType} --
            {this.state.climbGrade} --
            {this.state.climbLocation} --
            {this.state.climbDescription}
          </div>
        </div>
      )
    }
  }
}

