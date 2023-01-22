import React, { useState } from 'react'

const ItemCount = ({initial, stock, onAddToCart}) => {

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
           
            <button type="button" className="btn btn-success" key={count} onClick={() => restar()}>-</button>
            <button type="button" className="rounded btn-outline-dark"> {count} </button>
            <button type="button" className="btn btn-success" key={count >= 1} onClick={() => agregar()}>+</button>
            <br />
            <button type="button" className="btn btn-success" onClick={() => { onAddToCart(count); }}>Agregar al carrito</button>

        </>
            : <p>Lo sentimos no hay stock disponible</p>
        }
        </>
    )
}

export default ItemCount