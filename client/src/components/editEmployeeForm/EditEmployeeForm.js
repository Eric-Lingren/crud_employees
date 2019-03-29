import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withEmployees } from '../../context/EmployeeProvider';
import './editEmployeeFormStyles.css';

class editEmployeeForm extends Component {
    constructor(){
        super()
        this.state = {
            employeeId: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            salary: '',
            department: '',
            birthday: '',
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            employeeId: nextProps.selectedEmployeeId,
            firstName: nextProps.selectedEmployeeFirstName,
            lastName: nextProps.selectedEmployeeLastName,
            email: nextProps.selectedEmployeeEmail,
            phone: nextProps.selectedEmployeePhone,
            salary: nextProps.selectedEmployeeSalary,
            department: nextProps.selectedEmployeeDepartment,
            birthday: nextProps.selectedEmployeeBirthday
        })
    }


    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateEmployee(this.state)
        this.props.closeEditForm()
    }

    render() {
        return (
            <Form className='edit-employee-form' onSubmit={this.handleSubmit}>
                <div className='close-wrapper'>
                    <h4 className='close-icon' onClick={this.props.closeEditForm}> X </h4>
                </div>
                <h2> Edit Employee </h2>
                <div className='edit-form-wrapper'>
                    <div className='column'>
                        <FormGroup>
                            <Label for="employeeIDLabel"> Employee ID </Label>
                            <Input  type="number" 
                                    name="employeeId" 
                                    id="employeeIdInput" 
                                    placeholder="123456789" 
                                    value={this.state.employeeId} 
                                    onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="firstNameLabel"> First Name </Label>
                            <Input  type="text" 
                                    name="firstName" 
                                    id="firstNameInput" 
                                    placeholder="John" 
                                    value={this.state.firstName} 
                                    onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastNameLabel"> Last Name </Label>
                            <Input  type="text" 
                                    name="lastName" 
                                    id="employeeLastNameInput" 
                                    placeholder="Doe" 
                                    value={this.state.lastName} 
                                    onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="emailLabel"> Employee Email </Label>
                            <Input  type="email" 
                                    name="email" 
                                    id="emailInput" 
                                    placeholder="email@email.com" 
                                    value={this.state.email} 
                                    onChange={this.handleChange}/>
                        </FormGroup>
                    </div>
                    <div className='column'>
                        <FormGroup>
                            <Label for="departmentSelect"> Department </Label>
                            <Input  type="select" 
                                    name="department" 
                                    id="departmentInput" 
                                    onChange={this.handleChange}
                                    value={this.state.department}>
                                <option> --- </option>
                                <option value='engineering'> Engineering </option>
                                <option value='human resources'> Human Resources </option>
                                <option value='sales'> Sales </option>
                                <option value='executive'> Executive </option>
                                <option value='customer care'> Customer Care </option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="phoneLabel"> Phone </Label>
                            <Input  type="number" 
                                    name="phone" 
                                    id="phoneInput" 
                                    placeholder="555-345-6789" 
                                    value={this.state.phone} 
                                    onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="salaryLabel"> Salary </Label>
                            <Input  type="number" 
                                    name="salary" 
                                    id="salaryInput" 
                                    placeholder="85000" 
                                    value={this.state.salary} 
                                    onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="birthdayLabel"> Birthday </Label>
                            <Input  type="string" 
                                    name="birthday" 
                                    id="birthdayInput" 
                                    placeholder="01/01/1990" 
                                    value={this.state.birthday} 
                                    onChange={this.handleChange}/>
                        </FormGroup>
                    </div>
                </div>
                <Button color="success"> Save Updates </Button> 
            </Form>
        );
    }
}

export default withEmployees(editEmployeeForm);
