import { Grid, GridItem, Heading } from "@chakra-ui/react";
import Nav from "./component/navComponent/Nav";
import Main from "./component/mainComponent/Main";
import Article from "./component/articleComponent/Article";

function App() {
  const arr = ["yuta.jpeg","satoru.jpeg","LittleGojo.jpeg","AnimeBg.jpeg"];
  return (
    <>
      <Grid templateAreas={`"nav nav nav nav""article main main main"`} gap={5} >
        <GridItem area="nav">
          <Nav />
        </GridItem>
        <GridItem area="article" maxW={'250px'}>
          <Heading paddingX={3}>Genre</Heading>
          <Grid gap={5} padding={3}>
            <Article icon = '🎡' heading="Adventure"/>
            <Article icon = '💖' heading="Love"/>
            <Article icon = '🈶' heading="Anime"/>
            <Article icon = '🏈' heading="Sports"/>
          </Grid>
        </GridItem>
        <GridItem area="main" marginRight={5}>
          <Main img = {arr} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
