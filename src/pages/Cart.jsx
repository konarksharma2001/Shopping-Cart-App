import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="">
      {cart.length > 0 ? (
        <div className="flex gap-x-10 ">
          <div className="w-[42vw] ml-[17vw]  mb-20 mt-9">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex flex-col justify-around w-[28vw] ">
            <div className="  ">
              <div className="font-semibold text-xl uppercase text-[#166534]">
                Your Cart
              </div>
              <div className="text-[#15803d] text-5xl uppercase font-semibold mb-4">
                Summary
              </div>
              <p>
                <span className="text-xl font-semibold">Total Items: </span>{" "}
                <span className="text-xl">{cart.length}</span>
              </p>
            </div>

            <div className=" ">
              <p className="text-xl font-semibold mb-4">
                Total Amount: ${totalAmount}
              </p>
              <button className="bg-[#15803d] w-full text-white rounded-md h-14 font-bold text-xl">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5 items-center mt-[15%]">
          <h1 className="font-semibold text-xl ">Your cart is empty!</h1>
          <Link to={"/"}>
            <button className="bg-[#1ea54f] w-[12vw] uppercase text-white 
            rounded-md h-14 font-semibold text-xl transition 
            ease-in-out delay-150  hover:-translate-y-1 
            hover:scale-110 hover: ease-in duration-300 ...">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
