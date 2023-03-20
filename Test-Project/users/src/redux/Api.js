import axios from "axios";
//to load user information
export const loadUserApi = async () =>
    await axios.get("http://localhost:8088/Users/");
//to create/post/ user information
export const CreateUserApi = async (user) =>
    await axios.post("http://localhost:8088/Users/", user);
//to delete user information
export const DeleteUserApi = async (id) =>
    await axios.delete("http://localhost:8088/Users/" + id);  
//to update user information
export const UpdateUserApi = async (userid,userinfo) =>
    await axios.put("http://localhost:8088/Users/"+ userid ,userinfo); 