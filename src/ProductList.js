import React from 'react'
import logo from './fruit.jpg' // the path of the fruit.jpg
import styles from './ProductList.module.css' // call the css in the src
import {useState} from "react" // call the useStat use for the setProcudt from react
import {Link} from "react-router-dom" // for use the link funtion
import Title from './Title'

export default function ProductList() {
  let productList = [ //array for the list to show
    {"id":1,"name":"apple","price":5,"image":"apple.jpg","description":"林檎"},
    {"id":2,"name":"orange","price":6,"image":"orange.jpg","description":"オレンジ"},
    {"id":3,"name":"banana","price":4,"image":"banana.jpg","description":"バナナ"}
  ]

  const [showProduct,setShowProduct] = useState(false)

  return (
    <div>
        <img src={logo} />
        <br/>
        {showProduct && <button onClick={()=>{setShowProduct(false)}}>Hide the product</button>}  {/*this two button to set the boolean of showProduct to true and flase, to make the product to be hide and show */}
        {!showProduct && <button onClick={()=>{setShowProduct(true)}}>Show the product</button>}        
        <Title mainTitle="Please select the item" subTitle="HaHa"/>
        <div>
          {
            showProduct && productList.map(product=>(   // the product will show if showProduct is true 
            
            <div className={styles.productBorder }key={product.id}>
            {product.name}<br/>
            {product.price}<br/> 
            <Link to={'/product/'+ product.id}>
            <img src={process.env.PUBLIC_URL+'/img/'+product.image}/><br/> {/*to select the jpg from the public folder */}
             </Link>
            {product.description}<br/>
            </div>
            )
           )
          }
        </div>

    </div>
  )
}
