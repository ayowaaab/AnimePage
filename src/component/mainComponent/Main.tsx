import { Alert, AlertIcon, AlertTitle, Grid, Input } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";

interface urlImg {
  image_url:string;
}
interface Detail {
  jpg:urlImg;
  png:urlImg;
}
interface Card {
  mal_id:number;
  images: Detail;
  title: string;
}
interface FetchCardData {
  data: Card[];
}

function Main() {
  const [newContent, setNewContent] = useState<Card[]>([]);
  const [originalContent,setOriginalContent] = useState<Card[]>([]);
  const [error, seterror] = useState("");
  const handelEvent = (data: string) => {
    setNewContent(
      originalContent.filter(
        (c) => c.title.toUpperCase().indexOf(data.toUpperCase()) !== -1
      )
    );
  };



  useEffect(() => {
    const controler = new AbortController();
    apiClient
      .get<FetchCardData>("/anime", { signal: controler.signal })
      .then((res) => {
        
       setNewContent(res.data.data);
       setOriginalContent(res.data.data);
       
      })
      .catch((err) => {
        if (err instanceof CanceledError)return ;
        seterror(err.message);
      });
    return () => controler.abort();
  }, []);

  return (
    <>
      <Input
        size={"lg"}
        placeholder="Search . . ."
        onChange={(e) => handelEvent(e.target.value)}
        mb={5}
      />
          {error && (
            <Alert status="error">
              <AlertIcon /> <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
      <Grid
        rowGap={10}
        columnGap={5}
        alignContent={"center"}
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          xl: "repeat(3,1fr)",
        }}
      >
        {newContent.map((item) => (
          <AnimeCard key={item.title} title={item.title} img={item.images.jpg.image_url} />
        ))}
      </Grid>
    </>
  );
}

export default Main;
