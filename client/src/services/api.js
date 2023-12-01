import axios from 'axios'


const URL = 'http://localhost:8000';


export const addUser = async (data) =>{
    try{
        return await axios.post(`${URL}/add`, data)
    }catch(error){
        console.log("Error while calling add user api" ,error);
    }
}

export const getUsers = async ()=>{
    try{
        return await axios.get(`${URL}/all`)
    }catch(error){
        console.log("Error while calling all user API ", error);
    }
}

export const getUser = async (id)=>{
    try{
        return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log("Error while calling get user API ", error);
    }
}

export const editUser = async (user, id)=>{
    try{
        return await axios.post(`${URL}/${id}`, user)
    }catch(err){
        console.log("Error while calling edit user API ", err);
    }
}

export const deleteOneUser = async (id)=>{
    try{
        return await axios.delete(`${URL}/${id}`)
    }catch(err){
        console.log("Error while calling edit user API ", err);
    }
}