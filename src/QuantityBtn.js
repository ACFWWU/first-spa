import {useState} from 'react'

export default function QuantityBtn() {
  
    let[numInCart,setNumInCart]=useState(0)

    const handleAdd =()=>{
        setNumInCart(numInCart+1)
    }

    const handleSubtract =()=>{
        setNumInCart(numInCart-1)
    }

    return (
    <div>
        {
            (numInCart ===0)?
            <div onClick={handleAdd}>Add to the cart</div>:
            <div>
                <span onClick={handleSubtract}>-</span>
                {numInCart} in cart
                <span onClick={handleAdd}>+</span>
            </div>
        }
    </div>
  )
}
