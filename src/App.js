import { Box } from "@chakra-ui/react";
import { AllRoutes } from "./component/AllRoutes";
import { Footer } from "./component/Footer";
import { Navbar } from "./component/Navbar";



function App() {
  return (
    <>
      <Navbar/>
      <Box marginTop="4rem">
      <AllRoutes/>
      </Box>
      
      <Footer/>
    </>
  );
}

export default App;
