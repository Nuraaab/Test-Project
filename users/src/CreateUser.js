import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CreateUser=()=>{
    const [id,idChange]=useState("");
    const [first_name,firstNameChange]=useState("");
    const [last_name,LastNameChange]=useState("");
    const [age,AgeChange]=useState("");
    const [Gender,GenderChange]=useState("");
    const [height,HeightChange]=useState("");
    const navigate= useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
        const userData={first_name,last_name,age,Gender,height};
        fetch("http://localhost:8088/Users", {
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(userData)
        }).then((respo) => {
            alert("User Added successfully.");
            navigate("/");
        }).catch((err) => {
            console.log(err.message());
        })
    
    }
    return(
        
<div>
<div className="row">
    <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={submitHandler}>
            <div className="card" style={{"textAlign":"left"}}>
                <div className="card-title">
                    <h2 style={{"textAlign":"center"}}>Add User</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Id</label>
                                <input value={id} disabled="disabled" className="form-control"></input>

                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>First Name</label>
                                <input value={first_name} onChange={e=>firstNameChange(e.target
                                    .value)} className="form-control"></input>
                                
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Last Name</label>
                                <input value={last_name} onChange={e=>LastNameChange(e.target
                                    .value)} className="form-control"></input>
                                
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Age</label>
                                <input value={age} onChange={e=>AgeChange(e.target
                                    .value)} className="form-control"></input>
                                
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Gender</label>
                                <input value={Gender} onChange={e=>GenderChange(e.target
                                    .value)} className="form-control"></input>
                                
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Height</label>
                                <input value={height} onChange={e=>HeightChange(e.target
                                    .value)} className="form-control"></input>
                                
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <button className="btn btn-success">Add</button>
                                <Link to="/" className="btn btn-danger">Back</Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
</div>
    );
}
export default CreateUser;