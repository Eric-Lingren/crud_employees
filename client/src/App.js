import React, { Component } from 'react';
import { Button } from 'reactstrap';
import EmployeeList from './components/employeeList/EmployeeList';
import NewEmployeeForm from './components/newEmployeeForm/NewEmployeeForm';
import './appStyles.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      showNewEmployeeForm: false,
    }
  }

  toggleNewEmployeeForm = () => {
    this.setState({showNewEmployeeForm: !this.state.showNewEmployeeForm})
  }

  render() {
    return (
      <div className='app-wrapper'>
        <div className='button-wrapper'>
          <Button color="primary" onClick={this.toggleNewEmployeeForm}>
            { this.state.showNewEmployeeForm ? "Hide Employee Form" : "Create New Employee" }
          </Button>
        </div>
        { this.state.showNewEmployeeForm ? <NewEmployeeForm /> : null }
        <EmployeeList />
      </div>
    );
  }
}

export default App;
