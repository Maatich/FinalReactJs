import { useEffect } from 'react'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import useFirebase  from '../../Hook/useFirebase'
import ItemDetail from '../ItemDetail/ItemDetail'
import { CartContext } from '../../Context/CarritoContext'

const ItemDetailContainer = () => {

  const { id } = useParams();
  const { producto, getProduct } = useFirebase();
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    getProduct(id);
  }, []);

  const onAdd = (count) => {
    addToCart(producto, count);
    setAdded(true); // seteo en tru cuando es agregado el producto
  }

  return (
    <>
      <ItemDetail product={producto} onAdd={onAdd} added={added}/>
    </>
  )

}

export default ItemDetailContainer;