import react, { use } from "react";
import { Table,Button,Tag, Flex, Thead, Tbody, Tr, Th, Td, TableContainer,  Spacer} from "@chakra-ui/react";
import { useEffect,useState } from "react";
import { div } from "framer-motion/client";
import * as XLSX from 'xlsx';


function Deskboard() {
  const [data , setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  const users = data.map(user => ({
    ID: user.id,
    Name: user.name,
    Email: user.email,
    Username: user.username,
  }));

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(users);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
    XLSX.writeFile(workbook, 'users.xlsx');
  };

  return (
    <div>
      <Spacer></Spacer>
     <Flex justify="flex-end" width="100%" p={4}>
  <Button onClick={exportToExcel} colorScheme="teal">
    Export to Excel
  </Button>

   </Flex> 

   <Table.Root size="sm" striped>
      <Table.Caption captionSide="Top" > <Tag.Root>
  <Tag.Label fontSize="xl" fontWeight="bold" fontFamily="monospace">
    Deskboard User Data
  </Tag.Label>
</Tag.Root>
</Table.Caption>

      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.ColumnHeader>Email</Table.ColumnHeader>
          <Table.ColumnHeader>Username</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((user) => (
          <Table.Row key={user.id}>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.username}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={3}>Total Users: {data.length}</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table.Root>
         </div>
  );
}

export default Deskboard;


