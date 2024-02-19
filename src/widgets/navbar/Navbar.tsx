import "./Navbar.css";

import addSvg from "src/assets/svg/add.svg";
import profileSvg from "src/assets/svg/profile.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <button className="navbar__add-button">
        <img src={addSvg} alt="Add new space button"></img>
      </button>
      <button className="navbar__profile">
        <img src={profileSvg} alt="Profile button" />
      </button>
    </nav>
  );
};

export default Navbar;
