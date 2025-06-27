import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import{useNavigate} from 'react-router-dom'
 
export const Shopcontext = createContext();

const ShopcontextProvider = (props)=>{
      
    const currency = '$';
    const delivery_fee = 10;
    const[search,setSearch] = useState('')
    const [showsearch,setShowsearch] = useState(false)
    const[cartItems,setCartItems] = useState({})
    const navigate = useNavigate()

    const addtocart = async(itemid,size)=>{

        if(!size){
            toast.error('Select product sizee')
            return;
        }
       let cartData = structuredClone(cartItems);
       if(cartData[itemid]){
            if(cartData[itemid][size]){
            cartData[itemid][size]+=1;

            } else{
                cartData[itemid][size] = 1;
            }
       }else{
        cartData[itemid]={};
        cartData[itemid][size] = 1;
       }
       setCartItems(cartData);

    }


      



    const getCartCount = ()=>{
        let totelCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if (cartItems[items][item]>0) {
                        totelCount += cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totelCount;
    }

    const updateQuantity = async(itemid,size,quantity) =>{
        let cartData = structuredClone(cartItems);
        cartData[itemid][size]=quantity
        setCartItems(cartData)
    }

    const getCartamount = () =>{
        let totalamount = 0;
        for(const items in cartItems){
            let iteminfo = products.find((product)=>product._id === items)
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                           totalamount +=iteminfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalamount;
    }


    const value = {
        products , currency , delivery_fee,
        search,setSearch,showsearch,setShowsearch,
        cartItems,addtocart,getCartCount,updateQuantity,getCartamount,navigate
    }

    return(
        <Shopcontext.Provider value={value}>
           {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopcontextProvider;