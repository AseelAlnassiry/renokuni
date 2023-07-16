import { Link } from "react-router-dom";
import SearchModal from "./SearchModal";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-circle btn-ghost">
            <img className="h-6 w-6" src="bars.svg" alt="" />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <Link className="flex items-center gap-1" to={"/"}>
                <img className="h-5 w-5" src="fire.svg" alt="" />
                <span className="text-base font-medium">Trending</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-1" to={"/"}>
                <img className="h-5 w-5" src="bookmark.svg" alt="" />
                <span className="text-base font-medium">Saved</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-1" to={"/"}>
                <img className="h-5 w-5" src="newspaper.svg" alt="" />
                <span className="text-base font-medium">My Reviews</span>
              </Link>
            </li>
          </ul>
        </div>
        <Link
          className="btn btn-ghost p-1 text-xl normal-case md:px-4 md:text-2xl text-accent"
          to={"/"}
        >
          レノ国
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="flex items-center gap-1" to={"/"}>
              <img className="h-5 w-5" src="fire.svg" alt="" />
              <span className="text-base font-medium">Trending</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1" to={"/"}>
              <img className="h-5 w-5" src="bookmark.svg" alt="" />
              <span className="text-base font-medium">Saved</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1" to={"/"}>
              <img className="h-5 w-5" src="newspaper.svg" alt="" />
              <span className="text-base font-medium">My Reviews</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <SearchModal />
        <button className="btn btn-circle btn-ghost">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
              <div className="w-8 rounded-full md:w-10">
                <img
                  src="https://ipfs.creary.net/ipfs/QmayCWVoB27yxuN4aum762sfZVrX7XsSEY6wJ16na4QUWQ"
                  alt="Aseel's Profile"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <Link className="justify-between" to={"/profile"}>
                  Profile
                  <span className="badge">0 Reviews</span>
                </Link>
              </li>
              <li>
                <Link to={"/settings"}>Settings</Link>
              </li>
              <li>
                <Link to={"/logout"}>Logout</Link>
              </li>
            </ul>
          </div>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
