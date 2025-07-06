import { createContext,useContext,useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    const[cartItems,setCartItems] = useState([]);

    function addToCart(item){
        setCartItems((prev)=>{
            const  alreadyExists = prev.find((cartItem)=>cartItem.id == item.id);
        if(alreadyExists){

             return prev.map((cartItem)=>
            cartItem.id == item.id?
             {...cartItem,quantity:cartItem.quantity+1}
             :cartItem
            );
        }
            return [...prev,item];
        });  
    }
    function removeFromCart(id){
        setCartItems((prev)=>prev.filter((item)=>item.id !== id))
    }
    function cleanCart(){
        setCartItems([]);
    }
    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart,cleanCart}}>
            {children}
        </CartContext.Provider>
    );
}


export function useCart(){
    return useContext(CartContext);
}