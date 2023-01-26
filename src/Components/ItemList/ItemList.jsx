import Item from '../Item/Item'
import React from 'react';
import '../ItemList/itemList.css'

const ItemList = ({ products }) => {
  return (
    <>
      <div className='container  titular p-3'>
        <h1>Nuestros Servicios</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 bg-black m-2 g-4">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ItemList