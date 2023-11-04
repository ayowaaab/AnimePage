import useData from "./useData";

interface Genre {
  mal_id: number;
  name: string;
}
const useGenre = () => useData<Genre>("/genres/anime");

export default useGenre;