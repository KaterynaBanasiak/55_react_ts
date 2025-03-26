import { v4 } from "uuid";
import Product from "../components/Product/Product"; 

const products = [
    { name: 'Apple', price: 1.5 },
    { name: 'Banana', price: 1.0 },
    { name: 'Orange', price: 2.0 },
  ];
  
  const Homework07: React.FC = () => {
    return (
      <div>
        <h2>Product List</h2>
        {products.map((product) => (
          <Product key={v4()} name={product.name} price={product.price} />
        ))}
      </div>
    );
  };
  
  export default Homework07;