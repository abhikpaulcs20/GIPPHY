import { useEffect } from "react";
import { GifState } from "../context/gif-context";
import Gif from "../components/Gif";
import FilterGif from "../components/filter-gif";

function Home() {
  const { gf, gifs, setGifs, filter } = GifState();

  const fetchTrendingGIFs = async () => {
    const { data: gifs } = await gf.trending({
      limit: 50,
      type: filter,
      rating: "g",
    });
    setGifs(gifs);
  };

  useEffect(() => {
    fetchTrendingGIFs();
  }, [filter]);

  return (
    <div className="">
      <img
        src="/bannernew.gif"
        alt="newbanner"
        className="mt-2 rounded-md w-full"
      />
      <FilterGif showTrending />
      <div className=" columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs.map((gif) => {
          return <Gif gif={gif} key={gif.title} />;
        })}
      </div>
    </div>
  );
}

export default Home;
