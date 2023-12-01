import { useState } from "react"
import { FormGroup, FormControl, Input, InputLabel, styled, Button, Typography } from "@mui/material"
import { addUser } from '../services/api.js'
import { useNavigate } from 'react-router-dom';


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

const Adduser = ()=>{

    const [user, setUser] = useState(defaultValue)

    const navigate = useNavigate()

    const OnValueChange = (e)=>{
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }


    const addUserDetails = async ()=>{
        await addUser(user);
        navigate('/all')
    }

    return(
        <Container>
            <Typography variant ="h4"> Add User </Typography>
            <FormControl>
                <InputLabel> Name </InputLabel>
                <Input onChange={(e) =>{ OnValueChange(e) }} name="name"/>
            </FormControl>

            <FormControl>
                <InputLabel> User Name </InputLabel>
                <Input onChange={(e) =>{ OnValueChange(e) }} name="username"/>
            </FormControl>

            <FormControl>
                <InputLabel> Email Id </InputLabel>
                <Input onChange={(e) =>{ OnValueChange(e) }} name="email"/>
            </FormControl>

            <FormControl>
                <InputLabel> Phone No. </InputLabel>
                <Input onChange={(e) =>{ OnValueChange(e) }} name="phone"/>
            </FormControl>

            <FormControl>
                <Button variant="contained" onClick={()=>{addUserDetails()}}> Add User </Button>
            </FormControl>
        </Container>
    )
}

export default Adduser