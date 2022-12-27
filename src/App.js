import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Products from './pages/Products';
import UserProfile from './pages/UserProfile';

//Import created containers
import { UserContainer } from './containers/userContainer';
import { ProductContainer } from './containers/productContainer';

function App() {
  return (
    //Wrap with providers
    <UserContainer.Provider>
      <ProductContainer.Provider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </ProductContainer.Provider>
    </UserContainer.Provider>
  );
}

export default App;
