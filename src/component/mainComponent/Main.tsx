import { Grid, Input } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
import { ChangeEvent } from "react";
interface Props {
  img: string[];
  header: string[];
}
function Main({ img, header }: Props) {
  const handelChange = (data: ChangeEvent<HTMLInputElement>) => {
    const value = data.target.value;
    const cards = document.querySelectorAll(".chakra-card");
    const titles = document.querySelectorAll(".chakra-card .chakra-heading");

    cards.forEach((card , index) => {
      const titleText = titles[index].textContent;
      if (titleText?.toUpperCase()?.indexOf(value.toUpperCase()) != -1) {
        (card as HTMLElement).style.display = "grid";
      } else {
        (card as HTMLElement).style.display = "none";
      }
    });
  };

  return (
    <>
      <Input size={"lg"} placeholder="Search" mb={5} onChange={handelChange} />
      <Grid
        gap={5}
        alignContent={"center"}
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          xl: "repeat(3,1fr)",
        }}
      >
        {img.map((_,i)=><AnimeCard title={header[i]} img={img[i]} />)}
        
      </Grid>
    </>
  );
}

export default Main;
