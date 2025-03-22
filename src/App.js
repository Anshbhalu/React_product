import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './pages/Header';
import Products from './pages/Products';
import Single from './pages/Single';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path='/products/:id' element={<Single/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
