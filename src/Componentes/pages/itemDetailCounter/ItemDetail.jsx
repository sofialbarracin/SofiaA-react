import { Link } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ productSelected, onAdd, initial }) => {
  return (
    <div>
      <h2>{productSelected.title}</h2>
      <img src={productSelected.img} alt="" />
      <h5>Ya agregaste {initial} de este producto al carrito</h5>
      <h3>{productSelected.descripcion}</h3>

      <div style={{displey: "flex", justifyContent: "center"}}>
      <CounterContainer
        stock={productSelected.stock}
        onAdd={onAdd}
        initial={initial}
      
      />
      </div>
       
      <Link to="/cart">Finalizar compra</Link>
    </div>


  );
};

export default ItemDetail;
