import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import useGenre from "../../hooks/useGenre";

function AllArticles() {
  const { data } = useGenre();

  return (
    <>
      <Menu>
        <MenuButton w={"s"} as={Button} rightIcon={<ChevronDownIcon />}>
          Genres
        </MenuButton>
        <MenuList
          w={"xs"}
          sx={{
            "::-webkit-scrollbar": {
              width: "10px",
            },
            "::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              borderRadius: "5px",
            },
          }}
          overflowY={"scroll"}
          h={"xs"}
        >
          {data.map((element) => (
            <MenuItem key={element.mal_id}>{element.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default AllArticles;
