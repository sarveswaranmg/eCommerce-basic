import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Cart from './pages/Cart'
import PageNotFound from './pages/PageNotFound'
import { Routes, Route, Navigate } from "react-router-dom";
import Context from './poc/Context'
import Theme from './poc/themes/Theme'
import UserReducer from './poc/UserReducer'
import PaginationContext from './context/PaginationContext'
function App() {


  return (
    <>
      <NavBar></NavBar>
      <PaginationContext>
      <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
            <Route path="/product" element={<Product></Product>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>} ></Route>
        </Routes>
        </PaginationContext>
        {/* <Context></Context> */}
        {/* <Theme></Theme> */}
        {/* <UserReducer></UserReducer> */}
    </>
  )
}

export default App
