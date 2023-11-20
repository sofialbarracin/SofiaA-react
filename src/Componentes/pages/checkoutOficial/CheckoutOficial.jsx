import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

const CheckoutOficial = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then((res) => setOrderId(res.id));

cart.forEach((elemento)=> {
    updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
    });
});

  };



  return (
    <>
      {orderId ? (
        <div>
          <h2>Gracias por tu compra, su N° de orden es {orderId}</h2>
          <Link to="/">Seguir comprando</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Telefono"
            name="prone"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <button type="submit">Comprar</button>
        </form>
      )}
    </>
  );
};

export default CheckoutOficial;
