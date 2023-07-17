import { Link } from 'react-router-dom';
const NavbarCenter = () => {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link className="flex items-center gap-1" to={'/'}>
            <img className="h-5 w-5" src="fire.svg" alt="" />
            <span className="text-base font-medium">Trending</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-1" to={'/'}>
            <img className="h-5 w-5" src="bookmark.svg" alt="" />
            <span className="text-base font-medium">Saved</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-1" to={'/'}>
            <img className="h-5 w-5" src="newspaper.svg" alt="" />
            <span className="text-base font-medium">My Reviews</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavbarCenter;
