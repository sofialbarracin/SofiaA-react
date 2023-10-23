import CartWidget from "../../common/cartWidget/CartWidget";
import "./NavBar.css";
import { Outlet, Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className={"navbar"}>
        <Link to="/">
        <h4>LA QUINTA PLANTAS</h4>
        </Link>
        <ul className="menu">
          <Link to="/">
          <li>Productos</li>
          </Link>
          <Link to="/category/plantas">
          <li>Plantas</li>
          </Link>
          <Link to="/category/macetas">
          <li>Macetas</li>
          </Link>
        </ul>
        <CartWidget />
      </div>

    </>
  );
};

export default NavBar;
