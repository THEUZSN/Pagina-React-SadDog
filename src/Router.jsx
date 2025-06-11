import Home from "./pages/Home"
import Projetos from "./pages/Projetos"
import Contatos from "./pages/Contatos"
import Sobre from "./pages/Sobre"
import Page404 from "./pages/Page404"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function Router() {

  return (
    <BrowserRouter basename="/Pagina-React-SadDog/dist/">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projetos" element={<Projetos/>}/>
        <Route path="/contatos" element={<Contatos/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/*" element={<Page404/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default Router
