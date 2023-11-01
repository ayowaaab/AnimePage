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
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";
import Article from "./Article";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}
interface fetchGenreResponse {
  count: number;
  results: Genre[];
}

function AllArticles() {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controler = new AbortController();
    setLoading(true)
    apiClient
      .get<fetchGenreResponse>("/genres")
      .then((res) => {
        setGenre(res.data.results);
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false)
      });
      return () => controler.abort();
  },[]);
  const tabNum = Math.ceil(genre.length / 4);

  return (
    <>
      <>
        <Show above="md">
          {error && (
            <Alert status="error">
              <AlertIcon /> <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
          {genre.map((el) => (
            <Skeleton isLoaded={isLoading} width={3}>
            <Article key={el.id} heading={el.name} img={el.image_background} />
            </Skeleton>
          ))}
        </Show>
        <Show below="md">
          <VStack>
            <Tabs isFitted align={"center"}>
              <TabPanels minW={"md"}>
                {Array.from({ length: tabNum }, (_, i) => (
                  <TabPanel>
                    <HStack justify={"center"}>
                      {genre.slice(i * 4, (i + 1) * 4).map((element) => (
                        <Article
                          key={element.id}
                          heading={element.name}
                          img={element.image_background}
                        />
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
