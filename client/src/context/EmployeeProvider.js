import React, { Component } from 'react';
import axios from 'axios';

const EmployeeContext = React.createContext()

class EmployeeProvider extends Component {
    constructor(){
        super()
        this.state = {
            employees: [],
            selectedEmployeeDatabaseID: '',
            selectedEmployeeId: '',
            selectedEmployeeFirstName: '',
            selectedEmployeeLastName: '',
            selectedEmployeeEmail: '',
            selectedEmployeePhone: '',
            selectedEmployeeSalary: '',
            selectedEmployeeDepartment: '',
            selectedEmployeeBirthday: '',
        }
    }

    getEmployees = () => {
        axios.get('/employees').then(response => {
            this.setState({
                employees: response.data
            })
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    addEmployee = (newEmployee) => {
        axios.post('/employees', newEmployee).then(response => {
            this.getEmployees()
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    deleteEmployee = (id) => {
        axios.delete(`/employees/${id}`).then(response => {
            this.getEmployees()
        }).catch(err => console.log(err.response.data.errMsg))
    }

    getOneEmployee = (id) => {
        axios.get(`/employees/${id}`).then(response => {
            this.setState({
                selectedEmployeeDatabaseID: response.data._id,
                selectedEmployeeId: response.data.employeeId,
                selectedEmployeeFirstName: response.data.firstName,
                selectedEmployeeLastName: response.data.lastName,
                selectedEmployeeEmail: response.data.email,
                selectedEmployeePhone: response.data.phone,
                selectedEmployeeSalary: response.data.salary,
                selectedEmployeeDepartment: response.data.department,
                selectedEmployeeBirthday: response.data.birthday,
            })
        }).catch(err => console.log(err.response.data.errMsg))
    }

    updateEmployee = (editedEmployee) => {
        let id = this.state.selectedEmployeeDatabaseID
        axios.put(`/employees/${id}`, editedEmployee).then(response => {
            this.getEmployees()
        }).catch(err => console.log(err.response.data.errMsg))
    }

    render(){
        return (
            <EmployeeContext.Provider 
                value={{
                    ...this.state,
                    getEmployees: this.getEmployees,
                    addEmployee: this.addEmployee,
                    deleteEmployee: this.deleteEmployee,
                    getOneEmployee: this.getOneEmployee,
                    updateEmployee: this.updateEmployee
                }}>
                { this.props.children }
            </EmployeeContext.Provider>
        )
    }
}

export default EmployeeProvider

export const withEmployees = C => props => (
    <EmployeeContext.Consumer>
        {value => <C {...props} {...value}/>}
    </EmployeeContext.Consumer>
)



