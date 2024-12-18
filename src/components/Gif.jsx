import { Link } from "react-router-dom";

const Gif = ({ gif, hover = true }) => {
  return (
    <Link to={`/${gif.type}s/${gif.slug}`} key={gif.id}>
      <div className="w-full  relative aspect-video mb-2 cursor-pointer group  ">
        <img
          src={gif?.images?.fixed_width.webp}
          alt={gif?.title}
          className="w-full object-cover rounded transition-all duration-300 "
        />
        {hover && (
          <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-black font-bold flex items-end gap-2 p-2 ">
            <img
              src={gif?.user?.avatar_url}
              alt={gif?.user?.display_name}
              className="h-4  lg:h-7 xl:h-8 "
            />
            <span className="text-xs">{gif?.user?.display_name}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Gif;