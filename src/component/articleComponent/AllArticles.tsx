import {
  Alert,
  AlertIcon,
  AlertTitle,
  Show,
  Skeleton,
  Text,
  Input,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";
import Article from "./Article";
import { CanceledError } from "axios";
import { ChevronDownIcon } from "@chakra-ui/icons";

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
  const [originalGenre, setOriginalGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    const controler = new AbortController();
    setLoading(true);
    apiClient
      .get<fetchGenreResponse>("/genres/anime", { signal: controler.signal })
      .then((res) => {
        setOriginalGenre(res.data.data);
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
  const searchGenre = (val: string) => {
    setGenre(
      originalGenre.filter(
        (g) => g.name.toUpperCase().indexOf(val.toUpperCase()) !== -1
      )
    );
  };

  return (
    <>
      <>
        <Show above="md">
          <Heading
            px={5}
            textAlign={{ base: "center", md: "start", xl: "start" }}
          >
            Genre
          </Heading>
          <Input
            placeholder={"Search Here"}
            onChange={(e) => searchGenre(e.target.value)}
          />
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

          {genre.slice(0, 20).map((el) => (
            <Article key={el.mal_id} heading={el.name} />
          ))}
        </Show>
        <Show below="md">
          <Menu>
            <MenuButton w={'xs'} as={Button} rightIcon={<ChevronDownIcon />}>
              Genres
            </MenuButton>
            <MenuList w={'xs'} overflow={"scroll"} h={"xs"}>
              {genre.map((element) => (
                <MenuItem key={element.mal_id}>{element.name}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Show>
      </>
    </>
  );
}

export default AllArticles;
