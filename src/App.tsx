import { Grid, GridItem, Heading } from "@chakra-ui/react";
import Nav from "./component/navComponent/Nav";
import Main from "./component/mainComponent/Main";
import Article from "./component/articleComponent/Article";

function App() {
  return (
    <>
      <Grid templateAreas={`"nav nav nav nav""article main main main"`} gap={5} >
        <GridItem area="nav">
          <Nav />
        </GridItem>
        <GridItem area="article">
          <Heading>Genre</Heading>
          <Grid gap={5} padding={3}>
            <Article />
            <Article />
            <Article />
            <Article />
          </Grid>
        </GridItem>
        <GridItem area="main" marginRight={5}>
          <Main />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
