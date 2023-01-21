import React, { useState } from 'react'

const ItemCount = ({ initial, stock}) => {

    const [count, setCount] = useState(initial);

    const agregar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const restar = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return (
        <>{stock > 0 ? <>
            <h1>Cantidad: {count}</h1>
            <button key={count >= 1} onClick={() => agregar()}>Agregar</button>
            <button key={count} onClick={() => restar()}>Restar</button>
           
        </>
            : <p>Lo sentimos no hay stock disponible</p>
        }
        </>
    )
}

export default ItemCount