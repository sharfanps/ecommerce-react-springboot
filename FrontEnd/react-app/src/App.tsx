
import './App.css';
import Login from './components/login';
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Signup from './components/Signup'
import ProductList from './components/productList';
import Navbar from './components/navbar';
import CartPage from './components/cartPage';
import AddProduct from './components/addProduct';
import Home from './components/home';


function App() {
  // const [count, setCount] = useState(0)
const token = localStorage.getItem("token");
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
  return (
    <>
    
     <Routes>
      
      <Route path="/Signup" element={<Signup/>}/> 
      <Route path="/login" element={<Login/>}/> 
      <Route element={<Layout />}>
      <Route path="/" element={<Home/>}/>
      <Route path="/productList" element={ <ProductList />} />
      <Route path="/cartPage" element={<CartPage cartItems={[
        {id: 1, name:"grapes", price:10},{id: 2, name:"lemon", price:20}
      ]}/>}/>
      <Route path="/addProduct" element={<AddProduct/>}/>
      </Route>

     </Routes>
    </>
  )
}

export default App
