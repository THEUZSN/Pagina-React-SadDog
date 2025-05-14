import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Paages" element={<Pages/>}/>
        <Route path="/Contatos" element={<Contatos/>}/>
        <Route path="/Sobre" element={<Sobre/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
