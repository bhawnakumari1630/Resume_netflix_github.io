import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/slice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import fetchJsonp from "fetch-jsonp";
import { IoSearch } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { cacheResults } from "../utils/searchSlice";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);
  // console.log(searchCache);
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
        console.log('if statement')
      } else {
        getSearchSuggestions();
        console.log('else statement')
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    fetchJsonp(YOUTUBE_SEARCH_API + searchQuery)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[1]);
        setSuggestions(data[1]);
        dispatch(
          cacheResults({
            [searchQuery]: data[1],
          })
        );
        // console.log(searchQuery, data[1]);
      });
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if(searchCache[searchQuery]){
  //       // console.log( searchQuery , ':' ,searchCache[searchQuery])
  //       setSuggestions(searchCache[searchQuery])
  //     } else{
  //       getSearchSuggestions()
  //     }
  //   }, 200);

  //   return () => clearTimeout(timer); // run while component is destroying
  // }, [searchQuery]);

  // const getSearchSuggestions = () => {
  //   fetchJsonp(YOUTUBE_SEARCH_API + searchQuery)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log( searchQuery , ':' ,searchCache[searchQuery])
  //       setSuggestions(data[1]);
  //       dispatch(cacheResults({
  //         [searchQuery] : data[1]
  //       }))
  //     })
  //     .catch((error) => console.error("Error:", error));
  // };

  const renderSuggestions = suggestions.map((suggestion) => {
    return (
      <li
        key={suggestion}
        onClick={() => setShowSuggestions(false)}
        className="flex items-center gap-1.5 py-[0.3rem] px-4 shadow-sm hover:bg-slate-200/70"
      >
        <IoIosSearch />
        {suggestion}
      </li>
    );
  });

  return (
    <div className="grid grid-flow-col items-center m-2 p-2 pb-5 shadow-md ">
      <div className="col-span-1 flex items-center gap-2">
        <img
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="menu-icon"
          onClick={handleToggleMenu}
          className="h-9 cursor-pointer"
        />

        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="youtube-icon"
            className="h-8"
          />
        </a>
      </div>

      <div className="col-span-10 text-center relative">
        <div className=" h-9 flex justify-center">
          <input
            type="text"
            placeholder="search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="border w-[60%] h-full rounded-l-full px-3.5 py-1 text-zinc-700 hover:outline focus:outline outline-2 outline-blue-500 "
          />
          <button className="border px-3 pe-4 rounded-e-full bg-slate-200 hover:bg-slate-300 text-slate-800 ">
            <IoSearch />
          </button>
        </div>

        <div className="absolute w-full ">
          {showSuggestions && suggestions.length > 0 && (
            <ul className="min-w-96 w-[60%] shadow-md border-t border-slate-100 md:ms-[17%] mt-2 rounded-lg py-3 pb-3 bg-white">
              {renderSuggestions}
            </ul>
          )}
        </div>
      </div>

      <div className="col-span-1">
        <div>
          <img
            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            alt="user-icon"
            className="h-9"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
