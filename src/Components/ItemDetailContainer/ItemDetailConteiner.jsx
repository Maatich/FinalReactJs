import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFirebase from '../../Hook/useFirebase'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const { id } = useParams();
  const { product, getProduct } = useFirebase();

  useEffect(() => {
    getProduct(id);
  }, []);

  console.log(product, id)

  return (
    <>
      <ItemDetail product={product} />
    </>
  )

}

export default ItemDetailContainer;