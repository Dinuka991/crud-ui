import React, { Fragment } from 'react';
import {Button , Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Employees from './Employee'; // Change 'Employee' to 'Employees' to match the exported variable name

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function Home() {
    return (
      <Fragment>
        <div style={{ margin: "10rem" }}>
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
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Fragment>
    );
  }
  

export default Home;