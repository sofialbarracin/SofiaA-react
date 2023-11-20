import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCarWithAlert = ()=>{
    Swal.fire({
      title: "¿Estas seguro de vaciar tu carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, estoy seguro!",
      denyButtonText: `No, no estoy seguro`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart()
        Swal.fire("Tu carrito esta vacio :(", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Tus productos siguen en el carrito :)", "", "info");
      }
    });

  }


  return (
    <div>
      <h1>Total productos</h1>

      {cart.map((product) => (
        <div key={product.id} style={{ border: "3px solid green" }}>
          <h2>{product.title}</h2>
          <h2>{product.price}</h2>
          <h3>Cantidad: {product.quantity}</h3>
          <Button onClick={() => deleteProductById(product.id)}>
            Eliminar
          </Button>
        </div>
      ))}

      {cart.length > 0 && (<div>
        <h4>Total a pagar es : {total} </h4>
        <Link to="/checkout">
          <Button variant="contained">Finalizar compra</Button>
        </Link>
        <Button variant="contained" onClick={clearCarWithAlert}>
          Vaciar carrito
        </Button>
        </div>
        
        ) }


    </div>

  
  );
};

export default Cart;
