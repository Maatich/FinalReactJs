import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [contador, setContador] = useState(0)
    const [loading,setLoading] = useState(false)

    const isInCart = (id) => cart.find(item => item.id === id);

    const addToCart = (item, count) => {
        if (isInCart(item.id)) {
            setCart(cart.map((productos) => {
                setContador(contador + count)
                return productos.id === item.id ? { ...productos, count: (productos.count += count) } : productos;
            })
            );
        } else {
            setCart([...cart, { ...item, count }]);
            setContador(contador + count)
        }
    }

    const clearCart = () => {
        setCart([]);
        setContador(0)
    }

    const removeItem = (idToRemove) => {
        let newCart = cart.filter((itemInCart) => itemInCart.id !== idToRemove);
        setCart(newCart);
        setContador(0)
    }

    const getTotalPrice = () => {
        return cart.reduce((prev, act) => prev + act.count * act.price, 0)
    }

    const getItemTotalCount = () => {
        let total = 0;
        cart.forEach(itemInCart => {
            total = total + itemInCart.count
        });
        return total;
    }

    const getQuantity = (item) => {
        if (isInCart(item.id)) {
            let prod = isInCart(item.id)
            return prod.count
        } else {
            return 0
        }
    }

    return (
        <>
            <CartContext.Provider value={{ cart, addToCart, clearCart, removeItem, getTotalPrice, getItemTotalCount, contador, getQuantity, setLoading, loading }}>
                {children}
            </CartContext.Provider>
        </>
    )

}

export default CartProvider;
