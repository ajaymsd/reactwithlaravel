import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

function Edit() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        empname: '',
        designation: '',
        salary: ''
    });

    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        async function getEmployee() {
            try {
                const response = await axios.get("http://localhost:8001/api/employees/" + id + "/edit");
                console.log(response.data.data);
                setData(response.data.data);
            } catch (error) {
                console.error(error);
            }
        }

        getEmployee();
    }, []);

    const handleEdit = (event) => {
        event.preventDefault();
        axios.put("http://localhost:8001/api/employees/" + id, data).then((res) => {
            alert(res.data.msg);
            navigate('/');
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
            <h1>Edit an Employee</h1>
            <form className="mt-3" onSubmit={handleEdit}>
                <label className="form-label">Name:</label>
                <input className="form-control" type='text' name="empname" value={data.empname}
                       onChange={handleChange}/>
                <br/>
                <label className="form-label">Designation:</label>
                <input className="form-control" type='text' name="designation" value={data.designation}
                       onChange={handleChange}/>
                <br/>
                <label className="form-label">Salary:</label>
                <input className="form-control" type='text' name="salary" value={data.salary}
                       onChange={handleChange}/>
                <br/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <Link className="btn btn-dark mt-3" to="/">Back to home</Link>
        </div>
    );
}

export default Edit;
