import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from './Title.jsx'
import Productitem from './Productitem'

const RelatedProduct = ({category,subCategory}) => {

   const{products} = useContext(Shopcontext)
   const[related , setRelated] = useState([])
 
    
   useEffect(()=>{
       
    if(products.length >0){
       
        let productcopy = products.slice();
        productcopy = productcopy.filter((item)=>category === item.category);
        productcopy = productcopy.filter((item)=>subCategory === item.subCategory);
        setRelated(productcopy.slice(0,5));
        
    }

   },[products])
  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
           <Title text1={'RELATEG'} text2={'PRODUCTS'}/>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            related.map((item , index)=>(
                <Productitem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
            ))
        } 
      </div>
     
    </div>
  )
}

export default RelatedProduct