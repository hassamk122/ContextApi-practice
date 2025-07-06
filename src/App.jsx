
import { CartProvider } from "./Contexts/CartContext.jsx";
import Products from "./Pages/Products.jsx";
import Cart from "./Pages/Cart";
function App() {

  return (
    <CartProvider>
      <Products/>
      <Cart/>
    </CartProvider>
  )
}

export default App;
