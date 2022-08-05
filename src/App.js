import{BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';


function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home Page</Link>
      <Link to="/checkout">Checkout</Link>

      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/checkout" element={<Checkout/>}/>

        <Route path="/product" element={<ProductDetail/>}>
            <Route path=":id" element={<ProductDetail/>}/>
        </Route>
        
        <Route path="*" element={<p>404 Not Found</p>}/>  {/*The path="*" mean the path out of the path which is setted will show this page */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
