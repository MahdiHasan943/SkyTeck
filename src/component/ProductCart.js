import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { addToCart, removeFromCart } from "../redux/actions/productAction";
import './product.css'
import { BsHeart,BsHeartFill,BsFillHeartFill } from "react-icons/bs";


const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <div className='px-2 container1'>
      {pathname.includes("cart") && (
        <div className=' '>
          {/* <p> {product.quantity} </p> */}
        </div>
      )}
      <div className='bg-[]  mx-auto img-area1'>

        <img className="w-full img1 rounded-md" src={product.image} alt='images' />
        <div className="">
        <h1 className='text-[16px] py-2 text-[#0d0c0c] font-[400] '>{product.title}</h1>
      <p className=' font-[400] mb-3'>Rating: {product.rating}</p>
      <div className="flex">
        <img className="w-[30px]   h-[30px] rounded-full" src="https://res.cloudinary.com/dev-empty/image/upload/v1661245253/wqsnxv0pfdwl2abdakf5.jpg" alt="" />
       <p className="text-[#0d0c0c]  text-[14px] px-2">By Admin User</p>
      </div>
      <p className="text-[#057fa8] "><span className="text-[#939393]"><s>{product.price}</s></span> <span className="font-bold text-[20px]">$20</span></p>
      <div className=' flex-1'>
       
      </div>
          <div className='img-text1  gap-2 mt-5'>

          <h1 className='text-[16px] mt-[-280px]  py-2 text-[white] font-[600] font-Josefin Sans '>{product.title}</h1>

          <h1 className='text-[16px] py-2 text-[white] font-[400] font-[Josefin Sans]'>{product.des}</h1>

           
        {!pathname.includes("cart") && (
          <button
            onClick={() => dispatch(addToCart(product))}
            className='px-10 rounded-lg   hover:bg-[#057fa8]   bg-[#f0bf79] font-semibold py-3 hover:text-[white]  text-[#111111]'
          >
            Add To Cart
          </button>
        )}

        {!pathname.includes("cart") && (
          <button
            title='Add to wishlist'
            className=' shadow-5xl bgg  mt-[50px]	 ml-[50px]  py-3 px-4 rounded-md'
          >
                <BsFillHeartFill   className='stroke-[0.5px] stroke-white  hover:stroke-none  text-[red] fill-none font-bold	 hover:fill-[red]	  text-shadow-2xl text-[30px] ' />
                
  


           </button>
        )}
        {pathname.includes("cart") && (
          <button
            title='Remove'
            onClick={() => dispatch(removeFromCart(product))}
            className='flex justify-between px-3 bg-red-500 text-white p-1 rounded-full flex-1'
          >
            <p>Remove</p>
            <MdDeleteForever size='25' />
          </button>
        )}
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductCart;