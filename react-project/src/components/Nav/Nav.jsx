import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";

export const Nav = () => {
  const {getTotalItems} = useCart();
  const totalItems = getTotalItems();

  return (
    <nav>
      <ul className="nav-list-header">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/carrito"}>Carrito</Link>
          {totalItems > 0 && <span className="incart"> {totalItems}</span>}
        </li>
      </ul>
    </nav>
  );
};