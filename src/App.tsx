import { Grid, GridItem } from "@chakra-ui/react";
import Nav from "./component/navComponent/Nav";
import Main from "./component/mainComponent/Main";
import "./App.css";
import Footer from "./component/footerComponent/Footer";
import Carousel from "./component/carouselComponent/Carousel";

function App() {
  return (
    <>
      <Grid templateColumns={"repeat(4, 1fr)"} gap={5}>
        <GridItem colSpan={{ base: 4 }}>
          <Nav />
        </GridItem>
        <GridItem colSpan={{ base: 4 }}>
          <Carousel />
        </GridItem>

        <GridItem colSpan={{ base: 4, md: 4, xl: 4 }} mx={3} my={5}>
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
