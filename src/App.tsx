import { Grid, GridItem } from "@chakra-ui/react";
import Nav from "./component/Nav";

function App() {
  return (
    <>
      <Grid templateAreas={`"nav nav""article main"`}>
        <GridItem h={"100%"} w={"100%"} area="nav">
          <Nav />
        </GridItem>
        <GridItem h={"100%"} w={"100%"} area="article">
          
        </GridItem>
        <GridItem h={"100%"} w={"100%"} area="main">

        </GridItem>
      </Grid>
    </>
  );
}

export default App;
