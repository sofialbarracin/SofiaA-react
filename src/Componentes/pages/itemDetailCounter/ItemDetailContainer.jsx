import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2"
import { db } from "../../../firebaseConfig";

import {getDoc, collection, doc} from "firebase/firestore"

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams();

  const {addToCart , getQuantityById } = useContext(CartContext)

  let totalQuantity = getQuantityById(id)



  useEffect(() => {

    let itemCollection = collection (db, "products")

    let refDoc = doc(itemCollection, id)

    getDoc(refDoc).then((res)=>{
      setProductSelected({id: res.id, ...res.data()})
    })




  }, [id]);

  const onAdd = (cantidad) => {
    let product = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart (product)

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Lo agregaste al carrito",
      showConfirmButton: false,
      timer: 1500
    });

  };


  return <ItemDetail productSelected={productSelected} onAdd={onAdd} initial={totalQuantity}/>;
};

export default ItemDetailContainer;
