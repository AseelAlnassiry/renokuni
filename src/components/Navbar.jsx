import SearchModal from './SearchModal';
import NavbarStart from './NavbarStart';
import NavbarCenter from './NavbarCenter';
import NavbarEnd from './NavbarEnd';

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow-lg">
      <NavbarStart />
      <NavbarCenter />
      <NavbarEnd />
      <SearchModal />
    </div>
  );
};
export default Navbar;
