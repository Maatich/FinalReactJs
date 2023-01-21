import { useState } from 'react'
import { db } from '../Firebase/Index'
import { collection, doc, getDocs, getDoc, query, where } from 'firebase/firestore'

export const useFirebase = () => {

    const [productos, setProductos] = useState([]);
    const [producto, setProducto] = useState({});

    const getProducts = async (id) => {
        try {
            const prodCol = id ? query(collection(db, "productos"), where("categoria", "==", id)) : collection(db, 'productos')
            await getDocs(prodCol).then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log("Base de datos esta vacio")
                }
                setProductos(snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
        } catch (error) {

        }
    }

    const getProduct = async (id) => {
        try {
            const document = doc(db, 'productos', id)
            const response = await getDoc(document)
            response.data()
            setProducto({ id: response.id, ...response.data() })


        } catch (error) {

        }
    }

    return { productos, getProducts, getProduct, producto }
}

export default useFirebase;