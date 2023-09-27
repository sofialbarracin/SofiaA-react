import CardWidget from "../../common/cardWidget/CardWidget";

export const NavBar = () => {
  return (
    <div>
      <h4>Logo</h4>
      <ul>
        <li>Plantas</li>
        <li>Macetas</li>
        <li>Contácto</li>
      </ul>
      {/* Widget Carrito */}
      <CardWidget />
    </div>
  );
};

export default NavBar;
