
import './App.css';
import { Navigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Deskboard from './component/Deskboard';
import Sidebar from './component/Sidebar';
import { Box } from '@chakra-ui/react';
import Home from './component/Home';
import AddUser from './component/AddUser';

import About from './component/About'; // Assuming you have an About component


function App() {
  return (
    <div>
      {/* <Header/> */}
      <BrowserRouter>
      <Sidebar />
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<Deskboard/>} />
      <Route path="/add" element={<AddUser />} />
      <Route path="/about" element={<About />} />
    </Routes>
      </BrowserRouter>

      document.getElementById('root')

       {/*
       <Box ml={{ base: 0, md: '200px' }} p={5}></Box>
      <h1>Welcome to My React App</h1>
      <Deskboard /> */}

    </div>
  );
}


export default App;
