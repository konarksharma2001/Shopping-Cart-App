import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div>
      <div className="flex justify-evenly border-b-2 border-black mt-9">
        <div>
          <img className="w-1/2" src={item.image} />
        </div>
        <div className="flex flex-col gap-8 mb-7 w-full ">
          <h1 className="text-2xl font-semibold text-[#404555]">
            {item.title}
          </h1>
          <h1 className=" font-normal text-lg text-left">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </h1>
          <div className="flex justify-between w-4/5">
            <p className="text-[#15803d] font-semibold text-xl">
              ${item.price}
            </p>
            <div onClick={removeFromCart} className="bg-red-300 hover:bg-red-500 rounded-2xl p-2">
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
