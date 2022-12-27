import { useState } from 'react';
import { createContainer } from 'unstated-next';

//dummy products data
const productsArray = [
  { id: 1, title: 'Dummy product 1', price: '5$' },
  { id: 2, title: 'Dummy product 2', price: '10$' },
  { id: 3, title: 'Dummy product 3', price: '50$' },
  { id: 4, title: 'Dummy product 4', price: '5$' },
  { id: 5, title: 'Dummy product 5', price: '25$' },
];

const useProducts = () => {
  const [products, setProducts] = useState(productsArray);

  //Handle product delete functionality
  const handleDelete = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== id)
    );
  };

  return {
    products,
    setProducts,
    handleDelete,
  };
};
export const ProductContainer = createContainer(useProducts);
