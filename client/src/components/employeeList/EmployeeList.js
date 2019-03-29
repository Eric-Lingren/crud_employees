import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { withEmployees } from '../../context/EmployeeProvider';
import EditEmployeeForm from '../editEmployeeForm/EditEmployeeForm';
import './employeeListStyles.css';

class EmployeeList extends Component {
    constructor(){
        super()
        this.state = {
            isEditingEmployee: false
        }
    }

    componentDidMount(){ 
        this.props.getEmployees()
    }

    openEditForm = (e) => {
        let selectedEmployee = e.target.value
        this.setState({ isEditingEmployee: !this.state.isEditingEmployee })
        this.props.getOneEmployee(selectedEmployee)
    }

    closeEditForm = () => {
        this.setState({ isEditingEmployee: !this.state.isEditingEmployee })
    }

    render() {
        let mappedEmployees = this.props.employees.map(employee => {
            return(
                <tr key={employee._id} id={employee._id}>
                    <td>{employee.employeeId}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.department}</td>
                    <td>{employee.birthday}</td>
                    <td>
                        <Button color="warning" size="sm" value={employee._id} onClick={this.openEditForm}> Edit </Button>
                    </td>
                    <td>
                        <Button color="danger" size="sm" onClick={() => this.props.deleteEmployee(employee._id)}> Delete </Button>
                    </td>
                </tr>
            )
        })
        
        return (
            <div>
                { this.state.isEditingEmployee ? <EditEmployeeForm closeEditForm={this.closeEditForm} /> : null }
                <Table className='table' dark>
                    <thead>
                        <tr>
                            <th> Employee ID </th>
                            <th> First Name </th>
                            <th> Last Name </th>
                            <th> Email </th>
                            <th> Phone </th>
                            <th> Salary </th>
                            <th> Department </th>
                            <th> Birthday </th>
                        </tr>
                    </thead>
                    <tbody>
                        {mappedEmployees}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default withEmployees(EmployeeList);
