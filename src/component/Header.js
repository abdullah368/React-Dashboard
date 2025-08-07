import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';


const Header = () => {
  return (
    <Box   bg="red.300/40" px={6} py={4} boxShadow="md">
      <Flex align="center" gap="4" justify="center">
        <Heading  textJustify="left" size="md">Deskboard</Heading>
           <Spacer/>
            <Flex align="center" gap="4"  justify="center" alignContent={"center"}>
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
           </Flex>
           <Button> 
                Download Excel
                </Button>   
      </Flex>
      
    </Box>
  );
};

export default Header;
