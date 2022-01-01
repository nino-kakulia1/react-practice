import logo from "../../assets/logo-black.svg";
import image from "../../assets/burger-menu-black.svg";
import icons from "../../assets/search-black.svg";
import pin from "../../assets/pin-black.svg";
import icon from "../../assets/user-black.svg";
import bag from "../../assets/bag-black.svg";
import "./style.scss";

function Header() {
  return (
    <header className="header">
      <img src={image} className="header__burger-menu" alt="" />
      <img src={logo} className="header__logo" alt="" />

      <div className="header__icons">
        <img src={icons} className="header__icon" alt="" />
        <img src={pin} className="header__icon" alt="" />
        <img src={icon} className="header__icon" alt="" />
        <img src={bag} className="header__icon" alt="" />
      </div>
    </header>
  );
}

export default Header;
