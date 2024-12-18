import React, { useEffect, useState } from "react";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Categories from "../pages/category";
import { GifState } from "../context/gif-context";
import GifSearch from "./GifSearch";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const { gf, favorites } = GifState();

  const fetchGifCategories = async () => {
    const { data } = await gf.categories();
    setCategories(data);
  };

  useEffect(() => {
    fetchGifCategories();
  }, []);

  return (
    <nav>
      <div className="relative flex justify-between items-center mb-5">
        <Link to="/" className="flex gap-2">
          <img src="/logo.svg " className=" w-9" alt="Giphy Logo" />
          <h1 className=" text-4xl font-bold tracking-tighter cursor-pointer">
            GIPHY
          </h1>
        </Link>
        <div className="font-bold text-md flex gap-2 items-center">
          {/* {Render categories} */}
          {categories?.slice(0, 5)?.map((category) => {
            return (
              <Link
                key={category.name}
                to={`/${category.name}`}
                className="px-4 py-1 hover:gradient border-b-4 hidden lg:block"
              >
                {category.name}
              </Link>
            );
          })}

          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5 hover:gradient ${
                showCategories ? "gradient" : " "
              }   border-b-4 hidden lg:block`}
            />
          </button>
          {/* <button className="px-4 p-2 bg-[#6157ff] rounded-sm">
            <p className="">Upload</p>
          </button>
          <button className="p-2 px-4 bg-[#9933ff] rounded-sm">Create</button> */}

          {favorites.length > 0 && (
            <div className="h-9 bg-zinc-700 pt-1.5 px-6 cursor-pointer rounded">
              <Link to="/favorites">Favorite GIFs</Link>
            </div>
          )}

          <button>
            <HiMiniBars3BottomRight
              className=" text-sky-400 block lg:hidden"
              size={30}
            />{" "}
            {/* Display blocked in bigger screens only smaller screens */}
          </button>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20 ">
            <span className="text-3xl font-extrabold">categories</span>
            <hr className=" bg-gray-100 opacity-50 my-5" />
            <div
              className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3
            "
            >
              {" "}
              {/* handled all the screen sizes */}
              {categories?.map((category) => {
                return (
                  <Link
                    className="font-bold "
                    key={category.name}
                    to={`/${category.name_encoded}`}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <GifSearch />
    </nav>
  );
};

export default Header;
