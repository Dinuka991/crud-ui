import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Employees from './Employee'; // Adjust the import based on the correct file path
import { v4 as uuidv } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Edit() {
  const [name, setName] = useState(''); // Initialize the name state variable
  const [age, setAge] = useState('');
  const [id, setId] = useState('');

  let history = useNavigate();

  const handleEdit = (id, name, age) => {
    setName(name); // Set the name state variable
    setAge(age); // Set the age state variable
    history(`/edit/${id}`); // Navigate to the Edit component with the employee ID
  };


  return (
    <div style={{ margin: "10rem" }}>
    <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAge">
        <Form.Control type="text" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
      </Form.Group>
      <Button onClick={() => handleEdit(id, name, age)} type="submit">Submit</Button>
    </Form>
  </div>
  
  );
}

export default Edit;
