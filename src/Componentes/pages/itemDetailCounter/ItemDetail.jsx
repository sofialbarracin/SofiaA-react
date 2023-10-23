import CounterContainer from "../../common/counter/CounterContainer"


const ItemDetail = ( {productSelected, onAdd}) => {
  return (
    <div>
      <h2>{productSelected.title}</h2>
      <img src={productSelected.img} alt="" />
      <h3>{productSelected.descripcion}</h3>
      <CounterContainer stock={productSelected.stock} onAdd={onAdd}/>

    </div>
  )
}

export default ItemDetail
