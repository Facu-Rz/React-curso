import logo from "../../assets/logo.svg";
import { Nav } from "../Nav/Nav";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} />
        <span>PetShop Patitas</span>
      </div>
      <Nav />
    </header>
  );
};