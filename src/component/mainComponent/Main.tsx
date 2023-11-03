import { Grid, Input } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
import { useState } from "react";

interface Card {
  img: string;
  title: string;
}
interface MainData {
  content: Card[];
}

function Main({ content }: MainData) {
  const originalContent = content;
  const [newContent, setNewContent] = useState(content);
  const handelEvent = (data: string) => {
    setNewContent(
      originalContent.filter(
        (c) => c.title.toUpperCase().indexOf(data.toUpperCase()) !== -1
      )
    );
 
    
  };
  return (
    <>
      <Input
        size={"lg"}
        placeholder="Search . . ."
        onChange={(e) => handelEvent(e.target.value)}
        mb={5}
      />
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
        {newContent.map((item) => (
          <AnimeCard key={item.title} title={item.title} img={item.img} />
        ))}
      </Grid>
    </>
  );
}

export default Main;
