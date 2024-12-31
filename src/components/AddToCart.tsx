"use client"
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { increment, decrement } from "@/app/Redux/Slices/cartSlice";
import Link from "next/link";
import { RootState } from "@/app/Redux/store";



const AddToCart = ({ productId }: { productId: string }) => {
  const quantity = useSelector((state: RootState) => state.cart.quantities[productId] || 0);
  const dispatch = useDispatch();
  return (
    <div>



      {quantity===0 ? 
        
        <Button
          name="AddToCart"
          onClick={() => dispatch(increment(productId))}
          className="rounded-xl bg-lime-800 p-[10px] text-white m-[10px]"
        />
  
        : 
<>
<div className="flex flex-col">

<p className="mt-[10px]">{quantity}</p>
<div>
<Button
        name="+"
        onClick={() => dispatch(increment(productId))}
        className="rounded-xl bg-lime-800 p-[5px] text-white m-[10px]"
      />

      <Button
        name="-"
        onClick={() => dispatch(decrement(productId))}
        className="rounded-xl bg-lime-800 p-[5px] text-white m-[10px]"
      />
</div>
<div className="mb-[20px]">
<Link
href="/products/cart"
        className="rounded-xl  bg-lime-800 p-[10px] text-white m-[10px]"
      >  
      Go to Cart
      </Link>
</div>
</div>




</>

}
    </div>
  );
};

export default AddToCart;


// simple logic

// "use client";
// import { useDispatch, useSelector } from "react-redux";
// import Button from "./Button";
// import { Decressorder, Incressordered } from "@/app/Redux/Slices/cartSlice";


// const AddToCart = () => {
//   const numberOfitems = useSelector((state) => state.cart.numOfitems); // cart is store key
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <Button
//         name="AddToCart"
//         onClick={() => alert("Button clicked!")}
//         className="rounded-xl bg-lime-800 p-[10px] text-white m-[10px]"
//       />

//       <p>{numberOfitems}</p>

//       <Button
//         name="+"
//         onClick={() => dispatch(Incressordered())}
//         className="rounded-xl bg-lime-800 p-[10px] text-white m-[10px]"
//       />

//       <Button
//         name="-"
//         onClick={() => dispatch(Decressorder())}
//         className="rounded-xl bg-lime-800 p-[10px] text-white m-[10px]"
//       />
//     </div>
//   );
// };

// export default AddToCart;
