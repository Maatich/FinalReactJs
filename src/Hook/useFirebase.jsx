import { useState } from "react"
import { db } from "../Firebase/Index"
import { collection, getDocs, getDoc, doc } from "firebase/firestore"

const useFirebase = () => {

    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({});


    const getProducts = async () => {

        try {
            const prodColl = collection(db, 'productos')
            const snapshot = await getDocs(prodColl)
            const result = snapshot.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
            console.log("Items en firebase: ", result)
            setProductos(result)
        } catch (error) {
            console.log(error)
        }
    }




    const getProduct = async (id) => {
        //setLoading(true)
        try {
            const document = doc(db, "productos", id)
            const response = await getDoc(document)
            //let result =response.data()
            setProducto({ id: response.id, ...response.data() })


        } catch (error) {
            console.log(producto)
        }
    };
    return {
        productos,
        producto,
        getProducts,
        getProduct
    }
}

export default useFirebase