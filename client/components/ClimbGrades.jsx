import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class ClimbGrades extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      climbGrade: 'Bouldering'
    }
  }

  render() {
    if (this.props.climbType === 'Bouldering') {
      return (
        <FormGroup>
          <Label for="ClimbGrade">Climbing Grade</Label>
          <Input type="select" name="ClimbGrade" id="SelectClimbGrade">
            <option>V0</option>
            <option>V1</option>
            <option>V2</option>
            <option>V3</option>
            <option>V4</option>
            <option>V5</option>
            <option>V6</option>
            <option>V7</option>
            <option>V8</option>
            <option>V9</option>
            <option>V10</option>
          </Input>
        </FormGroup>
      )
    } else if (this.props.climbType === 'Top Rope') {
      return (
        <FormGroup>
          <Label for="ClimbGrade">Climbing Grade</Label>
          <Input type="select" name="ClimbGrade" id="SelectClimbGrade">
            <option>5.9</option>
            <option>5.10a</option>
            <option>5.10b</option>
            <option>5.10c</option>
            <option>5.10d</option>
            <option>5.11a</option>
            <option>5.11b</option>
            <option>5.11c</option>
            <option>5.11d</option>
            <option>5.12a</option>
          </Input>
        </FormGroup>
      )
    } else {
      return (
        <FormGroup>
          <Label for="ClimbGrade">Climbing Grade</Label>
          <Input type="select" name="ClimbGrade" id="SelectClimbGrade">
            <option>5.9lead</option>
            <option>5.10a</option>
            <option>5.10b</option>
            <option>5.10c</option>
            <option>5.10d</option>
            <option>5.11a</option>
            <option>5.11b</option>
            <option>5.11c</option>
            <option>5.11d</option>
            <option>5.12alead</option>
          </Input>
        </FormGroup>
      )
    }
  }
}