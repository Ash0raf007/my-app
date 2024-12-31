"use client"
import { productType } from '@/types/typeproducts'
import Image from 'next/image';
import React from 'react'
import AddToCart from './AddToCart';
import Link from 'next/link';


type AllProductsProps = {
  products: productType[]; // An array of productType
};

const AllProducts = ({products}:AllProductsProps) => {
  
  return (
<div className='flex justify-center items-center'>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
{products.map((product)=>{
      return (
        <div key={product.id} className='border flex flex-col text-center items-center max-w-[500px] h-auto'>
        
        <div className='p-[10px] flex items-center h-[200px]'>
        <Image src={product.thumbnail} width={100} height={200}   alt="pimg"/>
        </div> 
          <hr className='w-full'/>
          <h2 >{product.title}</h2>
          <hr className='w-full'/>
          <p className=''>{product.description}</p>
          <hr className='w-full'/>
          <p>Price: {product.price.toFixed(2)}</p>
          <p>Rating : {product.rating} ⭐</p>
          <p>Stock :{product.stock} </p>
          <Link href={`/products/${product?.id}`} className="bg-slate-700 rounded-xl px-[5px] py-[5px] text-white">Show Details</Link>

          <div className='flex'>

          <AddToCart productId={String(product.id)} />
          </div>
          </div>
          
      )
    })}</div>
</div>

  )
}

export default AllProducts


// simple logic

// import { productType } from '@/types/typeproducts'
// import Image from 'next/image';
// import React from 'react'
// import AddToCart from './AddToCart';
// import Link from 'next/link';


// type AllProductsProps = {
//   products: productType[]; // An array of productType
// };

// const AllProducts = ({products}:AllProductsProps) => {
  
//   return (
// <div className='flex justify-center items-center'>
// <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
// {products.map((product)=>{
//       return (
//         <div key={product.id} className='border flex flex-col text-center items-center max-w-[500px] h-auto'>
        
//         <div className='p-[10px] flex items-center h-[200px]'>
//         <Image src={product.thumbnail} width={100} height={200}   alt="pimg"/>
//         </div> 
//           <hr className='w-full'/>
//           <h2 >{product.title}</h2>
//           <hr className='w-full'/>
//           <p className=''>{product.description}</p>
//           <hr className='w-full'/>
//           <p>Price: {product.price.toFixed(2)}</p>
//           <p>Rating : {product.rating} ⭐</p>
//           <p>Stock :{product.stock} </p>
//           <Link href={/products/${product?.id}} className="bg-slate-700 rounded-xl px-[5px] py-[5px] text-white">Show Details</Link>

//           <div className='flex'>
//             <AddToCart/>
//           </div>
//           </div>
          
//       )
//     })}</div>
// </div>

//   )
// }

// export default AllProducts  