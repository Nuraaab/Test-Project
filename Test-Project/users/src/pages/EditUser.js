import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UpdateUserStart } from "../redux/Action";
import { back, ButtonDiv, Card, center, Continer, FCard, Form, Input, TButton } from "./Emotion";
import { css } from '@emotion/react';
import { Box} from 'rebass';
import { Label } from '@rebass/forms'
/** @jsxImportSource @emotion/react */
const EditUser=()=>{
    const {userid}=useParams();
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
    }, [userid]);
    
    const [id,idChange]=useState("");
    const [first_name,firstNameChange]=useState("");
    const [last_name,LastNameChange]=useState("");
    const [age,AgeChange]=useState("");
    const [Gender,GenderChange]=useState("");
    const [height,HeightChange]=useState("");
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
        const userData = { first_name, last_name, age, Gender, height };
      if(first_name && last_name && age && Gender && height) {
            dispatch(UpdateUserStart({userid,userData}));
            alert("User Updated Succcessfully!");
            navigate("/");
        }
    
    }
    return (
   
<div>
<Continer>
    <FCard>
        <Form onSubmit={submitHandler}>
            <Card style={{"textAlign":"left"}}>
                <Card>
                    <h2 style={{"textAlign":"center"}}>Update User Information</h2>
                </Card>
                <div>
                    <div>
                        <div>
                            <Box width={1} px={2}>
                                <Label>Id</Label>
                                <Input value={id} disabled="disabled" ></Input>
                            </Box>
                        </div>
                        <div>
                            <Box width={1} px={2}>
                                <Label>First Name</Label>
                                <Input value={first_name} onChange={e=>firstNameChange(e.target
                                    .value)} ></Input>
                            </Box>
                        </div>
                        <div>
                            <Box width={1} px={2}>
                                <Label>Last Name</Label>
                                <Input value={last_name} onChange={e=>LastNameChange(e.target
                                    .value)} ></Input>
                            </Box>
                        </div>
                        <div>
                            <Box width={1} px={2}>
                                <Label>Age</Label>
                                <Input value={age} onChange={e=>AgeChange(e.target
                                    .value)}></Input>
                            </Box>
                        </div>
                        <div>
                            <Box width={1} px={2}>
                                <Label>Gender</Label>
                                <Input value={Gender} onChange={e=>GenderChange(e.target
                                    .value)}></Input>
                            </Box>
                        </div>
                        <div>
                            <Box width={1} px={2}>
                                <Label>Height</Label>
                                <Input value={height} onChange={e=>HeightChange(e.target
                                    .value)}></Input>
                            </Box>
                        </div>
                        <div>
                            <div>
                            <ButtonDiv css={center}>
                                <TButton >Update</TButton>
                                <Link to="/" css={back} activeStyle={{ color: 'white' }}>Back</Link>
                            </ButtonDiv>
                            </div>
                        </div>


                    </div>
                </div>
            </Card>
        </Form>
    </FCard>
</Continer>
</div>
    );

}
export default EditUser;