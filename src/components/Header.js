import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/slice";

function Header() {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col m-2 p-2 pb-5 shadow-md ">
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

      <div className="col-span-10 text-center">
        <input
          type="text"
          placeholder="search..."
          className="w-1/2 border rounded-l-full px-3 py-1 h-9 outline-none text-sm "
        />
        <button className="border h-9 rounded-r-full bg-slate-100 px-5">
          🔍
        </button>
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
