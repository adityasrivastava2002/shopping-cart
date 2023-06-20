import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      {
        cart.length > 0  ? 
        (<div className="flex flex-row justify-between w-[100%] items-start">


          <div className="flex flex-col w-[60%]">
            {
              cart.map( (item,index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} />
              } )
            }
          </div>

          <div className="w-[40%] flex flex-col justify-between h-[80vh] mb-[1rem] px-[2rem] fixed right-0">

            <div className="mt-[4rem]">
              <div className="text-green-700 font-semibold">Your Cart</div>
              <div className="text-green-700 font-bold text-[2rem] mt-[-0.7rem] mb-[0.8rem]">Summary</div>
              <p className="text-xs font-semibold">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold">Total Amount: <b>${totalAmount.toFixed(2)}</b></p>
              <button className="border rounded-md my-[1rem] w-full py-[0.6rem] text-white text-xs font-bold bg-green-700">
                CheckOut Now
              </button>
            </div>

          </div>


        </div>) : 
        (<div className="flex flex-col justify-center items-center w-screen h-screen">
          <h1 className="font-bold text-3xl">Cart Empty</h1>
          <Link to={"/"}>
            <button className="border rounded-md my-[1rem] w-[20vw] py-[0.6rem] text-white text-xs font-bold bg-green-700">
              Shop Now
            </button>
          </Link>
        </div>)
      }
    </div>
  );
};

export default Cart;