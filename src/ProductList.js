import React from 'react'
import logo from './fruit.jpg' // the path of the fruit.jpg
import styles from './ProductList.module.css' // call the css in the src
import {useState,useEffect} from "react" // call the useStat use for the setProcudt from react
import {Link} from "react-router-dom" // for use the link funtion
import Title from './Title'
import QuantityBtn from './QuantityBtn'

export default function ProductList() {
  let [productList,setProcuctList] = useState([])
  let [input,setInput] = useState('')
  useEffect(()=>{
    fetch ('https://hoyinleung.github.io/demoapi/react-basic-product.json')
        .then(Response=>Response.json())
        .then(data=>setProcuctList(data)) 
    console.log(productList)
  },[])

  useEffect(()=>{
    if(input.length>4)
      console.log('to long')
    else
      console.log('to short')  
  },[input])



  return (
    <div>
      <input type="text" onChange={e=>setInput(e.target.value)}/>
        <img src={logo} />
        <br/>
     
        <Title mainTitle="Please select the item" />
        <div>
          {
            productList.map(product=>(  
            
            <div className={styles.productBorder }key={product.id}>
            {product.name}<br/>
            {product.price}<br/> 
            <Link to={'/product/'+ product.id}>
            <img src={process.env.PUBLIC_URL+'/img/'+product.image}/><br/> {/*to select the jpg from the public folder */}
             </Link>
            {product.description}
            <QuantityBtn/><br/>
            </div>
            )
           )
          }
        </div>

    </div>
  )
}
