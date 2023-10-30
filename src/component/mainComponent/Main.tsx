import { Grid } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
interface Props{
  img:string[]
}
function Main({img}:Props) {
  return (
    <>
<Grid gap={5}>
  
    <AnimeCard img = {img[0]} />
    <AnimeCard img = {img[1]} />
    <AnimeCard img = {img[2]} />
    <AnimeCard img = {img[3]} />
   
</Grid>
    </>
  );
}

export default Main;
