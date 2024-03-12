import { Route, Routes } from "react-router-dom";
import LayoutPublic from "./LayoutPublic";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import Inicio from "./pages/Inicio";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LayoutPublic />} >
          <Route path="/" element={<Inicio />} index />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
