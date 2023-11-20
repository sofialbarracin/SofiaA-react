/*import CounterContainer from "./Componentes/common/counter/CounterContainer";*/

import { BrowserRouter } from "react-router-dom";
import Approuter from "./router/Approuter";
import CartContextComponent from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <Approuter />
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
