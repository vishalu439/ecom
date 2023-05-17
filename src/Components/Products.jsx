
import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {add} from "../Store/cartSlice"


export default function Products() {
    const [products,setProducts] = useState([])
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchProducts=async()=>{
          const res=await fetch('https://fakestoreapiserver.reactbd.com/products')
          const data=await res.json()
          console.log(data)
          setProducts(data)
        }
        fetchProducts()

    },[])
  return (
    <div className='productsWrapper'>{
        
        products.map((product)=>(
        <div className='card' key={product.id}> 
        <img src={product.image} alt="" />
        <h4>{product.title}</h4>
        <h4>{product.price}</h4>
         <button className='btn' onClick={()=>dispatch(add(product))}>Add To Cart</button>
        </div>
        ))
        
        
        
        }</div>
  )
}
