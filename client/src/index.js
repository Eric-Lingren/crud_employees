import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeProvider from './context/EmployeeProvider'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <EmployeeProvider>
        <App />
    </EmployeeProvider>, 
document.getElementById('root'));