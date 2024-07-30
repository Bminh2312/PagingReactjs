

import  { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductPage from './page/productPage/ProductPage';
import CartPage from './page/cartPage/cartPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ProductPage />} />
          <Route path='/cart' element={<CartPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
