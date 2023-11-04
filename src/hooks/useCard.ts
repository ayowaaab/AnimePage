import useData from "./useData";

interface urlImg {
  image_url: string;
}
interface Detail {
  jpg: urlImg;
  png: urlImg;
}
interface Card {
  mal_id: number;
  images: Detail;
  title: string;
}

const useCards = () => useData<Card>("/anime");
export default useCards;
