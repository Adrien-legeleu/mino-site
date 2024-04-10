import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import Realisation from "./pages/Realisation"

const App=()=>{
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/realisations" element={<Realisation/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
