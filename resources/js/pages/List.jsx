import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Button from "bootstrap/js/src/button.js";

function Create() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        async function getEmployees() {
            try {
                const response = await axios.get("http://localhost:8001/api/employees");
                setEmployees(response.data.employees);
                console.log(response.data.employees);
            } catch (error) {
                console.error(error);
                // Handle the error, e.g., show a user-friendly message
            }
        }

        getEmployees();
    }, []);

    const handleDelete = async (id) => {
        axios.delete("http://localhost:8001/api/employees/" + id).then((res) => {
            alert(res.data.msg);
            window.location.reload();
        }).catch(err => console.log(err));
    }


    return (
        <div className="container">
            <h1>Employee Records</h1>
            <table className="mt-3 table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {employees && employees.length > 0 ?
                    employees.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.empname}</td>
                                <td>{item.designation}</td>
                                <td>{item.salary}</td>
                                <td>
                                    <Link to={"/edit/" + item.id} className="btn btn-success">Edit</Link>
                                    <button className="btn btn-danger mx-1"
                                            onClick={(e) => handleDelete(item.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }) : <div>No Employees Found</div>
                }
                </tbody>
            </table>
            <Link className="btn btn-dark mt-3" to="/create">Create New Record</Link>

        </div>
    );
}

export default Create;
