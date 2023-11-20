import { Route, Routes } from "react-router-dom";
import Layout from "../Componentes/layout/Layout";
import { routes } from "./menuRoutes";

const Approuter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => {
          return <Route key={id} path={path} element={<Element />} />;
        })}
      </Route>
      <Route path="*" element={<h1>Nos found</h1>} />
    </Routes>
  );
};

export default Approuter;
