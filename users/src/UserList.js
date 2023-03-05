import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
const UserList = () => {
    const [userData, userDataChange] = useState(null);
    const navigate=useNavigate();

    const updateUser=(id)=>{
navigate("/users/update/"+id);
    }
    const deleteUser=(id)=>{
        if(window.confirm("Do you want to delete the user:")){
            fetch("http://localhost:8088/Users/"+id, {
            method:"DELETE"
        }).then((respo) => {
            alert("User Deleted successfully.");
            window.location.reload();
        }).catch((err) => {
            console.log(err.message());
        })
        }
    }
    useEffect(() => {
        fetch("http://localhost:8088/Users").then((res) => {
            return res.json();
        }).then((respo) => {
            userDataChange(respo);
        }).catch((err) => {
            console.log(err.message());
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>User List</h2>
                </div>
                <div className="card-body">

                <div className="divbtn" style={{"textAlign":"right"}} >
                    <Link to="users/create" className="btn btn-dark">Add New User</Link>
                </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Id</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Age</td>
                                <td>Gender</td>
                                <td>Height</td>
                                <td>Update</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            {userData &&
                                userData.map(items => (
                                    <tr key={items.id}>
                                        <td>{items.id}</td>
                                        <td>{items.first_name}</td>
                                        <td>{items.last_name}</td>
                                        <td>{items.age}</td>
                                        <td>{items.Gender}</td>
                                        <td>{items.height}</td>
                                        <td>
                                            <a onClick={()=>{updateUser(items.id)}} className="btn btn-outline-success">Edit</a>
                                        </td>
                                        <td>
                                            <a onClick={()=>{deleteUser(items.id)}} className="btn btn-outline-danger">Delete</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}
export default UserList;