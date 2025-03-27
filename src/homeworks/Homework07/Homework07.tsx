import { v4 as uuidv4 } from "uuid";
import Product from "../../components/Product/Product";

const products = [
  { name: "Apple", price: 1.5 },
  { name: "Banana", price: 1.0 },
  { name: "Orange", price: 2.0 },
];

function Homework07() {
  const productList = products.map((product) => (
    <Product key={uuidv4()} name={product.name} price={product.price} />
  ));

  return (
    <div>
      <h2>Product List</h2>
      {productList}
    </div>
  );
}

export default Homework07;


