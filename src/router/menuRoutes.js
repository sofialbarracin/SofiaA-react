import Cart from "../Componentes/pages/cart/Cart"
import CheckoutOficial from "../Componentes/pages/checkoutOficial/checkoutOficial"
import ItemDetailContainer from "../Componentes/pages/itemDetailCounter/ItemDetailContainer"
import ItemListContainer from "../Componentes/pages/itemListContainer/ItemListContainer"

export const routes = [
    {
      id: "home" ,
      path: "/",
      Element: ItemListContainer,  
    },
    {
       id: "category",
       path: "/category/:categoryName",
       Element: ItemListContainer,

    },
    {
        id: "cart",
        path: "/cart",
        Element: Cart,
 
     },
     {
        id: "detalle",
        path: "/itemDetail/:id",
        Element: ItemDetailContainer,
 
     },
     {
      id: "checkout",
      path: "/checkout",
      Element: CheckoutOficial, 

   }
]

