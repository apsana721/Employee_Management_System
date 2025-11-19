import axios from "axios"
import { data } from "react-router-dom";
// !Retrive ->Access the users
// !get()->Used to access all the users
let getUsers=()=>{
    return axios.get("http://localhost:3001/users")
}
export default getUsers;

// !c-Create the new users or add the new users
// !post()
export let createUsers=(data)=>{
    return axios.post("http://localhost:3001/users",data);
};

// !D- Delete the user
// !delete()
export let deleteUser=(id)=>{
    return axios.delete(`http://localhost:3001/users/${id}`);
};

// !U-Update the user
// !put()
export let updateUser=(id,data)=>{
    return axios.put(`http://localhost:3001/users/${id}`,data);
}