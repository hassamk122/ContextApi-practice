import { useCart } from "../Contexts/CartContext.jsx";

const styles = {
  mainDiv: "font-rubik pb-10 pt-2",
  header: "text-3xl md:text-4xl text-center font-bold text-gray-600 mt-10",
  productsContainer:
    "flex items-center flex-col justify-center mt-20   flex-wrap gap-2 ",
  product:
    "rounded-lg flex flex-col text-center w-[90%]  md:w-128  p-2 cursor-pointer bg-zinc-200",
  productHeader: "flex items-center justify-between p-2 text-xl font-medium",
  imageContainer: "flex items-center flex-col justify-center h-48",
  total:
    "rounded-lg flex w-60 items-center justify-around w-[90%]  md:w-128 p-2 cursor-pointer bg-zinc-200",
    totalContainer: "flex items-center justify-center  mt-2 flex-wrap gap-2 font-rubik"
};
export default function Cart() {
  const { cartItems ,removeFromCart,cleanCart} = useCart();

  const totalPrice = cartItems.reduce((acc,item)=>acc+item.price*item.quantity,0);
  return (
    <div className={styles.mainDiv}>
      <h2 className={styles.header}>Your Shopping Cart</h2>
      {cartItems.length == 0 ? (
        <p className="text-center text-2xl font-rubik m-10 text-zinc-400">Cart is Empty!</p>
      ) : (
        <>
        <div className={styles.productsContainer}>
          {cartItems.map((product) => (
            <div key={product.id} className={styles.product}>
              <div className={styles.productHeader}>
                <img
                  className="bg-zinc-100 p-2 rounded-lg w-10  md:w-12"
                  src={product.image}
                ></img>
                <h3 className="text-zinc-600 text-sm md:text-base">{product.name}</h3>
                <p className="text-zinc-400 text-sm md:text-base">${product.price}</p>
                <p className="text-zinc-400 text-sm md:text-base">x{product.quantity}</p>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className={`bg-sky-400 px-2 py-1 font-extralight  text-white rounded-sm cursor-pointer hover:rounded-lg transition-all duration-200 `}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.totalContainer}>
        <div className={styles.total}>
          <h1 className="">Total</h1>
          <p className="text-zinc-400">${totalPrice}</p>
          <button
            onClick={() => cleanCart()}
            className={` px-2 py-1 text-white text-sm md:text-base bg-red-400   rounded-sm cursor-pointer hover:rounded-lg transition-all duration-200 `}
          >
          Remove All
          </button>
        </div>
      </div>
      </>
      )}
      
    </div>
  );
}
