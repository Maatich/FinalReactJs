
import useFirebase from '../../Hook/useFirebase'
import { useEffect } from 'react'
import ItemList from '../ItemList/ItemList'



const ItemListConteiner = () => {

  const  {productos, getProducts} = useFirebase()

  useEffect(() => {
    getProducts()
      
      
  }, [])


  return (
   <ItemList products={productos} />
  )
}


export default ItemListConteiner