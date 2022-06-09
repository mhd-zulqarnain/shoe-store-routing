import logo from './logo.svg';
import './App.css';
import { Link , Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Product from './components/Products'
import ProductDetails from './components/ProductDetails'
const NoPageFound = () => {
  return (
    <div><h1>No Page founs</h1></div>
  )
}
function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Link to="/home">Home</Link>
      <Link to="/products"> Products</Link>
      <Link to="/products/devices"> Device</Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/products/:productId' element={<ProductDetails/>}/>
        <Route path='*' element={<NoPageFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
