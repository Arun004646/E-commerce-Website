import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { assets } from '../assets/assets'
import Title from '../components/Title.jsx'
import Productitem from '../components/Productitem'

const Collection = () => {
  const {products , search , showsearch} = useContext(Shopcontext)
  const [showfilter,setShowfilter] = useState(false)
  const [filterproduct,setFilterproduct] = useState([])
  const [category,setCategory] = useState([])
  const [subCategory,setSubCategory] = useState([])
  const [sortType,setSortType] = useState('relavent')

  const togglecategory = (e)=>{
     if(category.includes(e.target.value)){
        setCategory(prev=>prev.filter(item=>item !== e.target.value))
     }
     else{
          setCategory(prev=>[...prev,e.target.value])
     }
  }

  const togglesubcategory =(e)=>{
     if(subCategory.includes(e.target.value)){
          setSubCategory(prev=>prev.filter(item=>item !== e.target.value))

     }
     else{
          setSubCategory(prev=>[  ...prev,e.target.value])
     }
  }

  const applyfilter =()=>{
     let productcopy = products.slice()

    if (showsearch && search) {
    productcopy = productcopy.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
  }

     if(category.length>0){
            productcopy = productcopy.filter(item=> category.includes(item.category)); 
     }

     if(subCategory.length > 0){
         productcopy = productcopy.filter(item => subCategory.includes(item.subCategory))
     }

   
     setFilterproduct(productcopy)
  }

  const sortproduct =()=>{
     let fbcopy = filterproduct.slice();
     switch(sortType){
          case 'low-high':
          setFilterproduct(fbcopy.sort((a,b)=>(a.price - b.price)));
          break;

          case 'high-low':
               setFilterproduct(fbcopy.sort((a,b)=>(b.price-a.price)))
               break;

               default:
                    applyfilter()
                    break
     }
  }
   


useEffect(()=>{
       applyfilter()
},[category,subCategory,search,showsearch])

useEffect(()=>{
  sortproduct()
},[sortType])
 
  return (
<div className='flex flex-col sm:flex-row gap-1 sm:gap-10 p-10 border-t'>
  
                                                                                     {/*fliter*/}
             <div className='min-w-60'>
                   <p onClick={()=>setShowfilter(!showfilter)} className='my-2 text-x1 flex items-center cursor-pointer gap-2' >
                            FILTER <img className={`h-3 sm:hidden ${showfilter ?'rotate-90': ''}`} src={assets.dropdown_icon} alt="" />
                   </p>
                                                                                  {/*category filter*/}
                   
         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' :'hidden'} sm:block sm:w-[200px] `}> 
                           <p className='mb-3 text-sm font-light'>CATEGORIES</p>  
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                           <p className='flex gap-2'>
                                <input className='w-3' type="checkbox" value={'Men'} onChange={togglecategory}/>MEN
                           </p>
      
                           <p className='flex gap-2'>
                                <input className='w-3' type="checkbox" value={'Women'}onChange={togglecategory} />WOMEN
                           </p>
      
                           <p className='flex gap-2'>
                                <input className='w-3' type="checkbox" value={'Kids'}onChange={togglecategory}/>KIDS
                           </p>
                      </div> 
          </div> 
                   
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter ? '' :'hidden'} sm:block sm:w-[200px] `}> 
                      <p className='mb-3 text-sm font-light'>TYPE</p>  
                <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                       <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Topwear'} onChange={togglesubcategory} />Topwear
                       </p>

                       <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={togglesubcategory}/>Bottomwear
                       </p>

                       <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Winterwear'}onChange={togglesubcategory}/>Winterwear
                       </p>
                 </div> 
                       
         </div>
                        </div>
                   
                              
                             <div className='flex-1'>
                               <div className='flex justify-between text-base sm:text-2xl mb-4'>
                                 <Title text1={'ALL'} text2={'COLLECTION'}/>

                                 {/*product sort*/}
                                 <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                                     <option value="relavent">Sort by: Relavent</option>
                                     <option value="low-high">Sort by: low to high</option>
                                     <option value="high-low">Sort by: high to low</option>
                                     </select>
                               </div>

                               <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                                      {
                                        filterproduct.map((item,index)=>(
                                         <Productitem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>  
                                        ))
                                      }
                               </div>
                   
                             </div>
                   
                           
    </div>
  )
}

export default Collection