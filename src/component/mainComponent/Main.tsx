import {
  Alert,
  AlertIcon,
  AlertTitle,
  Grid,
  HStack,
  Heading,
  Input,
} from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import useCards from "../../hooks/useCard";

function Main() {
  const { error, isLoading, data, originalData, setData } = useCards();

  const handelEvent = (data: string) => {
    setData(
      originalData.filter(
        (c) => c.title.toUpperCase().indexOf(data.toUpperCase()) !== -1
      )
    );
  };

  return (
    <>
      <HStack justifyContent={"space-between"}>
        <Heading size={{base:'md',xl:"lg"}} my={10} whiteSpace='nowrap'>
          Recently Added :
        </Heading>
        <Input
          width={'70%'}
          size={"lg"}
          placeholder="Search . . ."
          onChange={(e) => handelEvent(e.target.value)}
        />
      </HStack>

      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}
      <Grid
        gap={5}
        alignContent={"center"}
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          xl: "repeat(5,1fr)",
        }}
      >
        {isLoading &&
          [1, 2, 3, 4, 5, 6].map((item) => <AnimeCardSkeleton key={item} />)}
        {data.map((item) => (
          <AnimeCard
            key={item.title}
            title={item.title}
            img={item.images.jpg.image_url}
          />
        ))}
      </Grid>
    </>
  );
}

export default Main;
