import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Category, Events, Home, ItemDetail, NotFound } from "../pages";
import { NavBar } from "../components";

export const MainRouter = () => {
  //Route utiliza HOC -- Higher Order Component
  //Una ruta se compone de: hacia donde hay que ir y que componente se va a renderizar cuando estemos en ese lugar
  // '/': signfica que es el home (la pagina principal)
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
};
