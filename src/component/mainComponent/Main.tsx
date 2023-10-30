import { Grid } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";

function Main() {
  return (
    <>
<Grid rowGap={5}>
  
    <AnimeCard />
    <AnimeCard />
    <AnimeCard />
    <AnimeCard />
   
</Grid>
    </>
  );
}

export default Main;
