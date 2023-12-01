import { useState, useEffect } from "react"
import { FormGroup, FormControl, Input, InputLabel, styled, Button, Typography } from "@mui/material"
import { editUser, getUser } from '../services/api.js'
import { useNavigate, useParams } from 'react-router-dom';


const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top: 20px;
    }
`

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const EditUser = ()=>{

    const [user, setUser] = useState(defaultValue)
    let response = ""

    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        loadUserDetails()
    }, [id])

    const loadUserDetails = async ()=>{
        response = await getUser(id)
        const { name, email, username, phone} = response.data[0];
        setUser({ name, email, username, phone });
    }

    const OnValueChange = (e)=>{
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }

    const editUserDetails = async ()=>{
        await editUser(user, id);
        navigate('/all')
    }

    //const {name, email, username, phone} = response.data[0]

    return(
        <Container>
            <Typography variant ="h4"> Edit User </Typography>
            <FormControl>
                <InputLabel> Name </InputLabel>
                <Input onChange={(e) =>{ OnValueChange(e) }} name="name" value={user.name}/>
            </FormControl>

            <FormControl>
                <InputLabel> User Name </InputLabel>
                <Input onChange={(e) =>{ OnValueChange(e) }} name="username" value={user.username}/>
            </FormControl>

            <FormControl>
                <InputLabel> Email Id </InputLabel>
                <Input onChange={(e) =>{ OnValueChange(e) }} name="email" value={user.email}/>
            </FormControl>

            <FormControl>
                <InputLabel> Phone No. </InputLabel>
                <Input onChange={(e) =>{ OnValueChange(e) }} name="phone" value={user.phone}/>
            </FormControl>

            <FormControl>
                <Button variant="contained" onClick={()=>{editUserDetails()}}> Edit User </Button>
            </FormControl>
        </Container>
    )
}

export default EditUser