import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import Nav from "./component/navComponent/Nav";
import Main from "./component/mainComponent/Main";
import "./App.css";
import Footer from "./component/footerComponent/Footer";
import AllArticles from "./component/articleComponent/AllArticles";

function App() {
  const mainArr = [
    "yuta.jpeg",
    "satoru.jpeg",
    "gojo-satoru-jjk.webp",
    "AnimeBg.jpeg",
  ];
  const articlesArr = [
    {id : 1, icon: "🏈", heading: "Sports" },
    {id : 2, icon: "💖", heading: "Love" },
    {id : 3, icon: "🈶", heading: "Anime" },
    {id : 4, icon: "👼", heading: "Children" },
    {id : 5, icon: "✅", heading: "Sports" },
    {id : 6, icon: "🤷‍♀️", heading: "Love" },
    {id : 7, icon: "🤞", heading: "Anime" },
  ];

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
            justifyContent={{ base: "center", md: "start", xl: "start" }}
            gap={5}
            padding={5}
          >
            <AllArticles articleArray={articlesArr} />
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 3, xl: 3 }} mx={3}>
          <Main img={mainArr} />
        </GridItem>
        <GridItem colSpan={{ base: 4 }}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;