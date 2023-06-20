
import {RiDeleteBin6Line} from "react-icons/ri"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="flex border-b-2 border-black px-[1rem] py-[2rem] h-[29vh]">

        <div className="px-[1rem] min-w-[30%] flex justify-center">
          <img alt="image" src={item.image} />
        </div>
        <div className="px-[1rem]">
          <h1 className="font-semibold">{item.title}</h1>
          <h1 className="py-[1rem] text-xs">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div className="flex justify-between">
            <p className="text-green-600 font-bold">${item.price}</p>
            <div className="bg-red-200 rounded-full p-[0.5rem]"
            onClick={removeFromCart}>
              <RiDeleteBin6Line/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;