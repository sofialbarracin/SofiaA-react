import { NavBar } from "./Componentes/layout/navbar/NavBar";
import ItemListContainer from "./Componentes/pages/ItemListContainer/ItemListContainer";
import { Home } from "./Componentes/pages/home/Home";
import { Login } from "./Componentes/pages/login/Login";

function App() {
  let saludo = "Hola Sofia, como estas?";

  return (
    <div>
      <NavBar />
      <Home />
      <Login />
      <ItemListContainer saludo={saludo} edad={20}/>
    </div>
  );
}

export default App;
