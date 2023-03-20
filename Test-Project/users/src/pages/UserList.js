import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Heading } from 'rebass'
import { useDispatch, useSelector } from "react-redux";
import { DeleteUserStart, loadUserStart } from "../redux/Action";
/** @jsxImportSource @emotion/react */
import { Continer, Card, TButton, Table, ButtonDiv, Thead, Clink, tr, tTbtn } from "./Emotion";
const UserList = () => {
    const navigate = useNavigate();
    const updateUser = (id) => {
        navigate("/users/update/" + id);
    }
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.data);
    const deleteUser = (id) => {
        if (window.confirm("Are You Sure You Want To Delete The User ?")) {
            dispatch(DeleteUserStart(id));
            alert("User Deleted Succcessfully!");
            window.location.reload();
        }
    }
    useEffect(() => {
        dispatch(loadUserStart());
    }, [])
    return (
        <Continer>
            <Card>
                <Card >
                    <h2>User List</h2>
                </Card>
                <Card>
                    <ButtonDiv >
                        <Link to="users/create" css={Clink} activeStyle={{ color: 'white' }}>Add New User
                        </Link>
                    </ButtonDiv>
                    <Table>
                        <Thead>
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
                        </Thead>
                        <tbody>
                            {users &&
                                users.map(items => (
                                    <tr css={tr} key={items.id}>
                                        <td>{items.id}</td>
                                        <td>{items.first_name}</td>
                                        <td>{items.last_name}</td>
                                        <td>{items.age}</td>
                                        <td>{items.Gender}</td>
                                        <td>{items.height}</td>
                                        <td>
                                            <TButton onClick={() => { updateUser(items.id) }} >Edit</TButton>
                                        </td>
                                        <td>
                                            <TButton onClick={() => { deleteUser(items.id) }} css={tTbtn} >Delete</TButton>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Card>
            </Card>
        </Continer>
    )
}
export default UserList;