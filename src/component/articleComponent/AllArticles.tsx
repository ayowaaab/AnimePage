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

import Article from "./Article";
import { ChevronDownIcon } from "@chakra-ui/icons";
import useGenre from "../../hooks/useGenre";

function AllArticles() {
  const {data,error,isLoading,originalData,setData} =useGenre();
  
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  
  const searchGenre = (val: string) => {
    setData(
      originalData.filter(
        (g) => g.name.toUpperCase().indexOf(val.toUpperCase()) !== -1
      )
    );
  };

  return (
   
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

          {data.slice(0, 20).map((el) => (
            <Article key={el.mal_id} heading={el.name} />
          ))}
        </Show>
        <Show below="md">
          <Menu>
            <MenuButton w={"xs"} as={Button} rightIcon={<ChevronDownIcon />}>
              Genres
            </MenuButton>
            <MenuList w={"xs"} overflow={"scroll"} h={"xs"}>
              {data.map((element) => (
                <MenuItem key={element.mal_id}>{element.name}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Show>
  
    </>
  );
}

export default AllArticles;
