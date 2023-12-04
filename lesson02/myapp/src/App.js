import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

function App() {

  const [title2, setTitle2] = useState('Quan ly thong tin sinh vien')
  const [count, setCount] = useState(0)
  const [student, setStudent] = useState({
    "fullName": "Tran Van A",
    "email": "tranvana@gmail.com",
    "phoneNumber": "0967025996",
  })

  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fullname</th>
            <th scope="col">Email</th>
            <th scope="col">phoneNumber</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{student.fullName}</td>
            <td>{student.email}</td>
            <td>{student.phoneNumber}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>{student.fullName}</td>
            <td>{student.email}</td>
            <td>{student.phoneNumber}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>{student.fullName}</td>
            <td>{student.email}</td>
            <td>{student.phoneNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;


