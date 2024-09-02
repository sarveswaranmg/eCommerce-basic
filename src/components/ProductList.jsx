import React from "react";
import StyleObj from "../style.module.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector,useDispatch } from "react-redux";
import {actions} from "../redux/slices/cartSlice"
import { PriceChange } from "@mui/icons-material";
function ProductList({product}){
    const {cartQuantity,cartProducts} = useSelector((store=>store.cartState))
    const dispatch = useDispatch()
    const handleAdd=()=>{
        dispatch(actions.addtoCart)

    }
    const handleRemove=()=>{
        dispatch(actions.removeFromCart)
    }
    return(
        <div className={StyleObj.product}>
            <img src={product.image} alt="" className={StyleObj.product_image}></img>
            <div className={StyleObj.title}>{product.title}</div>
            <div className={StyleObj.price}>
                $ {product.price}
                </div>
            <div style={{display:"flex", justifyContent:"center",marginTop:"0.5rem"}}>
                <button onClick={()=>handleAdd({id,image,title,PriceChange})}><AddIcon></AddIcon></button>
                <p style={{alignContent:"center",marginLeft:"5px",marginRight:"5px"}}>{0}</p>
                <button onClick={()=>handleRemove({id,image,title,PriceChange})}><RemoveIcon></RemoveIcon></button>
            </div>
        </div>
    )
}
function IndQty({cartProducts}){
    cartProducts.forEach((product)=>{
        if(product.id=id){
            qty=product.qty;
        }
    })
    return(
        <>
        {qty}
        </>
    )
}

export default ProductList