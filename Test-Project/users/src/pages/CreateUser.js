import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Box} from 'rebass';
import { Label } from '@rebass/forms'
import { CreateUserStart } from "../redux/Action";
import { back, ButtonDiv, Card, center, Continer, FCard, Form, Input, TButton } from "./Emotion";
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
const CreateUser = () => {
    const [id, idChange] = useState("");
    const [first_name, firstNameChange] = useState("");
    const [last_name, LastNameChange] = useState("");
    const [age, AgeChange] = useState("");
    const [Gender, GenderChange] = useState("");
    const [height, HeightChange] = useState("");
    const userData = { first_name, last_name, age, Gender, height };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitHandler = (e) => {
        if (first_name && last_name && age && Gender && height) {
            dispatch(CreateUserStart(userData));
            alert("User Added Successfully!");
            navigate("/");
        }
    }
    return (
        <div>
            <Continer>
                <FCard >
                    <Form onSubmit={submitHandler}>
                        <Card style={{ "textAlign": "left" }}>
                            <Card>
                                <h2 style={{ "textAlign": "center" }}>Add User</h2>
                            </Card>
                            <div>
                                <div>
                                    <div>
                                        <Box width={1} px={2} >
                                            <Label>Id</Label>
                                            <Input value={id} disabled="disabled" ></Input>
                                        </Box>
                                    </div>
                                    <div>
                                        <Box width={1} px={2} >
                                            <Label>First Name</Label>
                                            <Input value={first_name} onChange={e => firstNameChange(e.target
                                                .value)} ></Input>
                                        </Box>
                                    </div>
                                    <div>
                                        <Box width={1} px={2} >
                                            <Label>Last Name</Label>
                                            <Input value={last_name} onChange={e => LastNameChange(e.target
                                                .value)} ></Input>
                                        </Box>
                                    </div>
                                    <div>
                                        <Box width={1} px={2} >
                                            <Label>Age</Label>
                                            <Input value={age} onChange={e => AgeChange(e.target
                                                .value)} ></Input>
                                        </Box>
                                    </div>
                                    <div>
                                        <Box width={1} px={2} >
                                            <Label>Gender</Label>
                                            <Input value={Gender} onChange={e => GenderChange(e.target
                                                .value)} ></Input>
                                        </Box>
                                    </div>
                                    <div>
                                        <Box width={1} px={2} >
                                            <Label>Height</Label>
                                            <Input value={height} onChange={e => HeightChange(e.target
                                                .value)} ></Input>
                                        </Box>
                                    </div>
                                    <div>
                                        <div >
                                            <ButtonDiv css={center}>
                                                <TButton>Add</TButton>
                                                <Link to="/" css={back} activeStyle={{ color: 'white' }}> Back </Link>
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
export default CreateUser;