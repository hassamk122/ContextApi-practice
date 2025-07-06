
import { useCart } from '../Contexts/CartContext.jsx'
import { Shirt ,Footprints} from 'lucide-react';

const sampleProducts =[
     { id: 1, name: "T-shirt",image:"./tshirt-1.svg", price: 10 ,color:"hover:bg-sky-100",quantity:1},
  { id: 2, name: "Shoes",image:"./shoes-1.svg", price: 50,color:"hover:bg-cyan-100",quantity:1 },
     { id: 3, name: "T-shirt",image:"./tshirt-2.svg", price: 10,color:"hover:bg-pink-100" ,quantity:1},
  { id: 4, name: "Shoes",image:"./shoes-2.svg", price: 50,color:"hover:bg-green-100" ,quantity:1 },
];

const styles ={
    mainDiv:' bg-gray-100 font-rubik pb-10 pt-2',
    header:'text-4xl md:text-6xl text-center font-bold text-gray-600',
    productsContainer:'flex items-center justify-center mt-10 flex-wrap gap-2 ',
    product:'rounded-lg flex flex-col w-60 text-center w-72 h-72 p-2 cursor-pointer bg-zinc-200',
    productHeader:'flex items-center justify-between p-2 text-xl font-medium',
    imageContainer:'flex items-center flex-col justify-center h-48'
}
export default function Products() {

    const {addToCart} = useCart();

    return (
    <div className={styles.mainDiv}>
        <h2 className={styles.header}>Products</h2>
        <div className={styles.productsContainer}>
        {sampleProducts.map((product)=>(
            <div key={product.id} className={`${product.color} ${styles.product}`}>
                <div className={styles.productHeader}>
                    <img className="bg-zinc-100 p-2 rounded-lg w-12" src={product.image}></img>
                <h3 className='text-zinc-600'>{product.name}</h3>
                 <p className='text-zinc-400'>${product.price}</p>
                    </div>
                    
                    <div className={styles.imageContainer}>
                           <img src={product.image} className={product.name =="Shoes"?"w-32":"w-42"}></img>
                        </div>
                        <div className='flex items-center justify-around'>                          
                            <h3 className={`bg-zinc-400 px-3 py-1 font-extralight  text-white rounded-sm`}>{product.quantity}</h3>
                             <button onClick={()=>addToCart(product)} className={`bg-sky-400 px-2 py-1 font-extralight  text-white rounded-sm cursor-pointer hover:rounded-lg transition-all duration-200 `}>Add To Cart</button>
                            </div>
               
                </div>
        ))}
         </div>
    </div>
  )
}
