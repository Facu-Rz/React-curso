import { Children, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context){
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }
    return context;
}

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const exist = (id) => {
        const exist = cart.some((element) => element.id === id);
        return exist;
    }

    const addItem = (item) => {
        if (exist(item.id)) {
            alert("El producto ya existe en el carrito");
            return;
        }

        setCart([...cart, item]);
        alert("Se agrego el producto")
    };

    const getTotalItems = () => {
        return cart.length;
    };

    const getCartTotal = () => {
        return cart.reduce((acc, element) => acc + element.price, 0); 
    };

    const removeItem = (id) => {
        const updateCart = cart.filter((element) => element.id !== id);
        setCart(updateCart);
        alert("Producto eliminado");
    };

    const clearCart = () => {
        setCart([]);
    };

    const checkout = () => {
        alert("La compra fue un exito");
        clearCart();
        navigate("/");
    };
    
    const values = { exist, addItem, getTotalItems, getCartTotal, removeItem, clearCart, checkout};
    return <CartContext.Provider value = {values}> {children} </CartContext.Provider>;
}