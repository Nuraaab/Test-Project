import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser=()=>{
    const {userid}=useParams();
  const [userData,userDataChange]=useState({});

    useEffect(() => {
        fetch("http://localhost:8088/Users/" +userid).then((res) => {
            return res.json();
        }).then((respo) => {
            idChange(respo.id);
            firstNameChange(respo.first_name);
            LastNameChange(respo.last_name);
            AgeChange(respo.age);
            GenderChange(respo.Gender);
            HeightChange(respo.height);
        }).catch((err) => {
            console.log(err.message());
        })
    }, []);
    
    const [id,idChange]=useState("");
    const [first_name,firstNameChange]=useState("");
    const [last_name,LastNameChange]=useState("");
    const [age,AgeChange]=useState("");
    const [Gender,GenderChange]=useState("");
    const [height,HeightChange]=useState("");
    const navigate= useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
        const userData={id,first_name,last_name,age,Gender,height};
        fetch("http://localhost:8088/Users/"+userid, {
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(userData)
        }).then((respo) => {
            alert("User Updated successfully.");
            navigate("/");
        }).catch((err) => {
            console.log(err.message());
        })
    
    }
    return (
   
<div>
<div className="row">
    <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={submitHandler}>
            <div className="card" style={{"textAlign":"left"}}>
                <div className="card-title">
                    <h2 style={{"textAlign":"center"}}>Update User Information</h2>
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
                                <button className="btn btn-secondary">Update</button>
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
export default EditUser;