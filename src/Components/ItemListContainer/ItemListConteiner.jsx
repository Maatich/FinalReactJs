
import useFirebase from '../../Hook/useFirebase'
import { useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'



const ItemListConteiner = () => {

  const  {productos, getProducts} = useFirebase()
  const {id} = useParams()

  useEffect(() => {
    getProducts(id)
      
      
  }, [id])


  return (
   <ItemList products={productos} />
  )
}


export default ItemListConteiner