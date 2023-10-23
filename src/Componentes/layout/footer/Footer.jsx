import { Outlet } from "react-router-dom";
import "./Footer.css"
const Footer = () => {
  return (
    <>
      <div className="footer">
        <h3 style={{ color: "white" }}>
          LaQuinta.Plantas - Todos los derechos reservados.
          <br />
          Avenida Hernan Cortes 6 - Portal 1 - CP 29678 - Buenos Aires,
          Argentina.
        </h3>
      </div>
      
    </>
  );
};

export default Footer;
