import React, {useState} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

function Create() {
    const [data, setData] = useState({
        empname: '',
        designation: '',
        salary: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8001/api/employees", data).then((res) => {
            alert(res.data.msg);
            window.location.reload();
        }).catch(err => console.log(err));
    }

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div>
            <h1>Add an Employee</h1>
            <form className="mt-3" onSubmit={handleSubmit}>
                <label className="form-label">Name:</label>
                <input className="form-control" type='text' name="empname" value={data.empname}
                       onChange={handleChange}/>
                <br/>
                <label className="form-label">Designation:</label>
                <input className="form-control" type='text' name="designation" value={data.designation}
                       onChange={handleChange}/>
                <br/>
                <label className="form-label">Salary:</label>
                <input className="form-control" type='text' name="salary" value={data.salary} onChange={handleChange}/>
                <br/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <Link className="btn btn-dark mt-3" to="/">Back to home</Link>
        </div>
    );
}

export default Create;
