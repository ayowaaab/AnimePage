import {
  Alert,
  AlertIcon,
  AlertTitle,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  VStack,
  HStack,
  Show,
  Tab,
  Skeleton,
  Text,
  Input,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";
import Article from "./Article";
import { CanceledError } from "axios";

interface Genre {
  mal_id: number;
  name: string;
}
interface fetchGenreResponse {
  count: number;
  data: Genre[];
}

function AllArticles() {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [originalGenre,setOriginalGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    const controler = new AbortController();
    setLoading(true);
    apiClient
      .get<fetchGenreResponse>("/genres/anime", { signal: controler.signal })
      .then((res) => {
        setOriginalGenre(res.data.data)
        setGenre(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controler.abort();
  }, []);
 
  const searchGenre = (val:string) =>{
    setGenre(
      originalGenre.filter(
        (g) => g.name.toUpperCase().indexOf(val.toUpperCase()) !== -1
      )
    )
  }
  const tabNum = Math.ceil(genre.length / 6);



  
  return (
    <>
      <>
        <Show above="md">
          <Input placeholder={"Search Here"} onChange={(e)=>searchGenre(e.target.value)} />
          {error && (
            <Alert status="error">
              <AlertIcon /> <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
          {isLoading &&
            skeletons.map((skeleton) => (
              <Skeleton height={5} key={skeleton}>
                <Text></Text>
              </Skeleton>
            ))}

          {genre.map((el) => (
            <Article key={el.mal_id} heading={el.name} />
          ))}
         
        </Show>
        <Show below="md">
          <VStack>
            <Tabs isFitted align={"center"}>
              <TabPanels minW={"md"}>
                {Array.from({ length: tabNum }, (_, i) => (
                  <TabPanel key={i}>
                    <HStack justify={"center"}>
                      {genre.slice(i * 6, (i + 1) * 6).map((element) => (
                        <Article key={element.mal_id} heading={element.name} />
                      ))}
                    </HStack>
                  </TabPanel>
                ))}
              </TabPanels>
              <TabList>
                {Array.from({ length: tabNum }, (_, i) => (
                  <Tab key={i}>{i + 1}</Tab>
                ))}
              </TabList>
            </Tabs>
          </VStack>
        </Show>
      </>
    </>
  );
}

export default AllArticles;
