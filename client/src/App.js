import logo from './logo.svg';
import './App.css';

// All Components 
import NavBar from './Components/NavBar';
import ChiragGwalani from './Components/ChiragGwalani';
import AllUser from './Components/AllUsers';
import Adduser from './Components/AddUser';
import EditUser from './Components/EditUser';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
       <Route path='/' element = { <ChiragGwalani/>} />
        <Route path='/all' element = { <AllUser/>} />
        <Route path='/add' element = { <Adduser/>} />
        <Route path='/edit/:id' element= { <EditUser/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
