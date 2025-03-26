import './Product.css'; 

interface ProductProps {
  name: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ name, price }) => {
  let backgroundColor;

  
  switch (name) {
    case 'Apple':
      backgroundColor = 'green';
      break;
    case 'Banana':
      backgroundColor = 'yellow'; 
      break;
    case 'Orange':
      backgroundColor = 'orange'; 
      break;
    default:
      backgroundColor = 'gray'; 
  }

  return (
    <div className="product-card" style={{ backgroundColor }}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}

export default Product;