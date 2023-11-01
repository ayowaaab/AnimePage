import { Grid, Input } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
interface Props{
  img:string[];
  header:string[];
}
function Main({img,header}:Props) {
  return (
    <>
    <Input size={'lg'} placeholder="Search" mb={5}></Input>
<Grid gap={5} alignContent={'center'} templateColumns={{base:'repeat(1,1fr)',sm:'repeat(2,1fr)',md:'repeat(2,1fr)',xl:'repeat(3,1fr)'}}>
  
    <AnimeCard title={header[0]} img = {img[0]} />
    <AnimeCard title={header[1]} img = {img[1]} />
    <AnimeCard title={header[2]} img = {img[2]} />
    <AnimeCard title={header[3]} img = {img[3]} />
   
</Grid>
    </>
  );
}

export default Main;
