import React from 'react';
import SideBar from '../components/side-bar/SideBar';
import TopBar from '../components/top-bar/TopBar';

//Import required containers
import { UserContainer } from '../containers/userContainer';
import { ProductContainer } from '../containers/productContainer';

const Products = () => {
  //Use useContainer API method to access required data
  const { user } = UserContainer.useContainer();
  const { products, setProducts, handleDelete } =
    ProductContainer.useContainer();

  return (
    <div>
      <TopBar />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <div style={{ padding: 20 }}>
          <div>
            <h3>Products</h3>
            <button onClick={() => setProducts()}>Clear All</button>
            <h5>User : {user.name}</h5>
          </div>
          {products?.map((item) => (
            <div
              style={{ border: '1px solid gray', margin: 10, padding: 10 }}
              key={item.id}
            >
              <span style={{ marginRight: 200 }}>{item.title}</span>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
