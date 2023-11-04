import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Nav from "./component/navComponent/Nav";
import Main from "./component/mainComponent/Main";
import "./App.css";
import Footer from "./component/footerComponent/Footer";
import AllArticles from "./component/articleComponent/AllArticles";

function App() {


  return (
    <>
      <Grid templateColumns={"repeat(4, 1fr)"} gap={5}>
        <GridItem colSpan={{ base: 4 }}>
          <Nav />
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 1, xl: 1 }} my={5}>
      
          <Flex
            flexDirection={{ base: "row", md: "column", xl: "column" }}
            justifyContent={{ base: "center", md: "start", xl: "start" }}
            gap={5}
            padding={5}
          >
            <AllArticles />
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 3, xl: 3 }} mx={3} my={5}>
          <Main />
        </GridItem>
        <GridItem colSpan={{ base: 4 }}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
