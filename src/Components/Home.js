import React, { Fragment , useState, useEffect } from 'react';
import {Button , Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Employees from './Employee'; // Change 'Employee' to 'Employees' to match the exported variable name
import { Link, useNavigate, useParams } from 'react-router-dom';


// Put any other imports below so that CSS from your
// components takes precedence over default styles.


function Home() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const { id } = useParams();

  
    let history = useNavigate();
  
    const handleDelete = (id) => {
      var index = Employees.findIndex((x) => x.id === id);
      Employees.splice(index, 1);
      history('/');
    };
  
    const handleEdit = (id, name, age) => {
      setName(name); // Set the name state variable
      setAge(age); // Set the age state variable
      history(`/edit/${id}`); // Navigate to the Edit component with the employee ID
    };
  
    return (
      <Fragment>
        <div style={{ margin: '10rem' }}>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {Employees && Employees.length > 0 && Employees.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>
                      <Link to={`/edit/${item.id}`}>
                        <Button onClick={() => handleEdit(item.id, item.name, item.age)} variant="primary">Edit</Button>
                      </Link>
                    </td>
                    <td>
                      <Button onClick={() => handleDelete(item.id)} variant="primary">Delete</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <br></br>
          <Link className='d-grid gap-2' to="/create">
            <Button size='lg' variant="primary">Create</Button>
          </Link>
        </div>
      </Fragment>
    );
  }
  
  export default Home;
  