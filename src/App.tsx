import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import Realisation from "./pages/Realisation"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App=()=>{
  return (
    <BrowserRouter>
    <ToastContainer/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/realisations" element={<Realisation/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
