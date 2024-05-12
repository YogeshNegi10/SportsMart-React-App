import React from 'react'

import { BiTrash } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { removeFromwishList } from '../../Redux/WishlistSlice';
import { addToCart } from '../../Redux/CartSlice';
import { toast } from 'react-toastify';




const WhislistComponent = ({productList}) => {
  const dispatch = useDispatch()
  const {title,image,price,id} = productList;


  const handleRemove = (id) =>{
           dispatch(removeFromwishList(id))
           toast.success('Removed for Wishlist')
  }



  const handleWishlist = (product,id) =>{
      
      dispatch(addToCart(product))
      dispatch(removeFromwishList(id))
      toast.success('Added To Cart')
  
  }

  return (
   <div className=" max-w-2/2 grid sm:grid-cols-4 grid-cols-2 border-2 border-t-0 items-center py-6">
   <div className=" flex  items-center sm:ml-4 mb-6 ml-10 ">
     <div className="img_container w-24"> 
       <img src={image} alt="" className=" w-full mr-4" />
     </div>
     <div className="title ml-4">
       <span className=" text-sm">{title}</span>
     </div>
   </div>
   <span>Rs {price}</span>
   <div className=" flex justify-center">
     <button onClick={()=>handleWishlist(productList,id)}  className=" text-center w-1/2 text-sm  text-white whitespace-pre bg-red-500 border-0  py-2  focus:outline-none hover:bg-red-600 rounded">
       Move To Cart
     </button>
   </div>
   <div className="btn-container flex justify-center cursor-pointer">
     <BiTrash onClick={()=>handleRemove(id)} size={30}  />
   </div>
 </div>
  )
}

export default WhislistComponent