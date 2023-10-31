import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  HStack,
  Show,
} from "@chakra-ui/react";
import Article from "./Article";

interface obj {
  id: number;
  icon: string;
  heading: string;
}
interface Props {
  articleArray: obj[];
}
function AllArticles({ articleArray }: Props) {
    const tabNum = Math.ceil(articleArray.length/4);
    
  return (
    <>
      <Show above="md">
        {articleArray.map((element) => (
          <Article key={element.id} heading={element.heading} icon={element.icon} />
        ))}
      </Show>
      <Show below="md">
        <VStack>
          <Tabs isFitted align={"center"}>
            <TabPanels minW={"md"}>
            {Array.from({ length: tabNum }, (_, i) => (
              <TabPanel key={i}>
                 <HStack justify={"center"}>
                  {articleArray.slice(i * 4, (i + 1) * 4).map((element) => 
                    <Article key={element.id} heading={element.heading} icon={element.icon} />
                  )}
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
  );
}

export default AllArticles;
