import {
  Box,
  Flex,
  Text,
  VStack,
  IconButton,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Deskboard from "./Deskboard";
import { Route ,Routes} from "react-router-dom";
import Home from "./Home";
import AddUser from "./AddUser";
import About from "./About"; // Assuming you have an About component

import { useNavigate} from 'react-router-dom';



export default function Sidebar() {

   const navigate = useNavigate();

  return (
    <Flex minH="100vh">
      {/* Sidebar */}
      <Box
        w="250px"
        colorPalette="blue"
         bg={{ base: "colorPalette.100", _hover: "colorPalette.200" }}
        p={4}
        borderRight="1px"
      >

         <Text fontSize="xl" xl={6} spacing={8} justifySelf={"center"} fontWeight="bold">My App</Text>
         
        <VStack align="stretch" spacing={4}>
          <Button variant="surface" onClick={() => navigate('/')}>Home</Button>
          <Button variant="surface" onClick={() => navigate('/home')}>User Data</Button>
          <Button variant="surface" onClick={() => navigate('/add')}>Add User Data</Button>
          <Button variant="surface" onClick={() => navigate('/about')}>About</Button>
        </VStack>
      </Box>





      {/* Main Content */}
      <Box flex="1" p={4}>
        <Text fontSize="2xl" mb={4}></Text>
        {/* Here you can render the main content based on the route */}
       <Routes>
          <Route path="/" element={<Deskboard />} />
          <Route path="/home" element={<Deskboard/>} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </Flex>
  );
}


// export default Sidebar;