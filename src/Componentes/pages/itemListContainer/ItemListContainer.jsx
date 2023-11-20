import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";

import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { products } from "../../../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  const rellenarDB = () => {
    const productCollection = collection(db, "products");
    products.forEach((elemento) => {
      addDoc(productCollection, elemento);
    });
  };

  useEffect(() => {
    let productCollection = collection(db, "products");

    let consulta = undefined;

    if (!categoryName) {
      consulta = productCollection;
    } else {
      consulta = query(
        productCollection,
        where("category", "==", categoryName)
      );
    }
    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });

      setItems(newArray);
    });
  }, [categoryName]);

  return (
    <>

      {items.length === 0 ? (
        <BarLoader size={50} color="green" />
      ) : (
        <ItemList items={items} />
      )}
      ;
    </>
  );
};
export default ItemListContainer;
