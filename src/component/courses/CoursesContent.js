import React, { useEffect } from 'react'
import './courses.css'
import { useDispatch, useSelector } from "react-redux";
import loadProductData from '../../redux/thunk-products/fetchProducts';
import ProductCart from '../ProductCart';



const CoursesContent = () => {
  const products = useSelector((state) => state.product.products)


console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductData());
  }, [dispatch]);



  // if (products.length) {
  //   content = products.map((product) => (
  //     <ProductCard key={product.model} product={product} />
  //   ));
  // }

  // if (products.length && (stock || brands.length)) {
  //   content = products
  //     .filter((product) => {
  //       if (stock) {
  //         return product.status === true;
  //       }
  //       return product;
  //     })
  //     .filter((product) => {
  //       if (brands.length) {
  //         return brands.includes(product.brand);
  //       }
  //       return product;
  //     })

    

 return (
      <div className='px-4 sm:px-0 py-20 bg-[#f6fafb]'>
         
          <div className="py-20 ">
              

          <p className='text-center text-[#098b99] title  pb-2 font-semibold animate-pop-in   text-[16px]'>Popular Courses</p>

<h1 className='text-center text-black text-[40px] subtitle animate-pop-in font-bold'>Expand Your Career Opportunity <br /> With Our Courses</h1>


      </div>
      
      <div className="grid    grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:px-12">
       {
         products.map((product) => <ProductCart key={product.model} product={product} />)
        }
        <div className="">


        </div>


      </div>
    </div>
  )
}

export default CoursesContent