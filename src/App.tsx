import {  Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import Nav from "./component/navComponent/Nav";
import Main from "./component/mainComponent/Main";
import Article from "./component/articleComponent/Article";
import "./App.css";
import Footer from "./component/footerComponent/Footer";

function App() {
  const arr = ["yuta.jpeg", "satoru.jpeg", "gojo-satoru-jjk.webp", "AnimeBg.jpeg"];
  return (
    <>
      <Grid templateColumns={"repeat(4, 1fr)"} gap={5}>
        <GridItem colSpan={{ base: 4 }}>
            <Nav />
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 1, xl: 1 }}>
          <Heading
            px={5}
            textAlign={{ base: "center", md: "start", xl: "start" }}
          >
            Genre
          </Heading>
          <Flex
            flexDirection={{ base: "row", md: "column", xl: "column" }}
            justifyContent={{base:"center",md:"start",xl:'start'}}
            gap={5}
            padding={5}
          >
            <Article icon="🏈" heading="Sports" />
            <Article icon="💖" heading="Love" />
            <Article icon="🈶" heading="Anime" />
            <Article icon="👼" heading="Children" />
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 3, xl: 3 }} mx={3}>
          <Main img={arr} />
        </GridItem>
        <GridItem colSpan={{ base: 4 }}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
