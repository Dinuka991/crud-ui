import React , {useState} from "react";
import { Button , Form  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Employees from './Employee'; // Change 'Employee' to 'Employees' to match the exported variable name
import { v4 as uuidv } from 'uuid';
import {Link, useNavigate} from 'react-router-dom'

function Add() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    let history = useNavigate();

    const handleSubmit = (e) => { 
        e.preventDefault();
        const newEmployee = {
            id: uuidv(),
            name: name,
            age: age,
        };
        Employees.push(newEmployee);
        history('/')
    }

    return( 
        <div style={{ margin: "10rem" }}>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} />
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
           </div> 
    )
}

export default Add;
