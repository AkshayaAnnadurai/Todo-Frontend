
import './App.css';

import { Box, Container } from "@chakra-ui/react";
import Todos from './pages/Todos';
import Navbar from './Routes/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <Box bg={"blackAlpha.900"}>
    <Navbar />
      <Box  h={"100vh"}  bg={"blackAlpha.900"} display="flex" justifyContent="center" alignItems="center">
        <Container className="App" >
         
        
          <AllRoutes />
 </Container>
 </Box>
 </Box>
  
  );
}

export default App;
