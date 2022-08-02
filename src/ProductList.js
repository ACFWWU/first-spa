import React from 'react'
import logo from './fruit.jpg' // the path of the fruit.jpg
import styles from './ProductList.module.css' // call the css in the src
import {useState} from "react" // call the useStat use for the setProcudt from react

export default function ProductList() {
  let productList = [ //array for the list to show
    {"id":1,"name":"apple","price":5,"image":"apple.jpg","description":"林檎"},
    {"id":2,"name":"orange","price":6,"image":"orange.jpg","description":"オレンジ"},
    {"id":3,"name":"banana","price":4,"image":"banana.jpg","description":"バナナ"}
  ]

  const [product,setProduct] = useState('fruit') //set the component in fruit 

  const handleClick = () =>{
    setProduct('react')      //change the word from fruit to react
    console.log(product)
  }

  return (
    <div>
        {product} <button onClick={handleClick}>Change The Value</button>
        <img src={logo} />
        <h1 style={{backgroundColor:'orange',borderBottom:'5pk solid red'}}>Please select the item</h1>
        <div>
          {
            productList.map(product=>(
            <div className={styles.productBorder }key={product.id}>
            {product.name}<br/>
            {product.price}<br/> 
            <img src={process.env.PUBLIC_URL+'/img/'+product.image}/><br/> {/*to select the jpg from the public folder */}
            {product.description}<br/>
            </div>
            )
           )
          }
        </div>

    </div>
  )
}
