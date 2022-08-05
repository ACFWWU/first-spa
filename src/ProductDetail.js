import {useParams,Link} from "react-router-dom"
import QuantityBtn from "./QuantityBtn"
import Title from './Title'


export default function ProductDetail() {

    let params = useParams() 

  return (
    <div>
        <Title mainTitle={params.id +'Product Information'}/>
        <QuantityBtn/>
        <br/>

        <Link to="/">Back to the product list</Link>
    </div>
  )
}
