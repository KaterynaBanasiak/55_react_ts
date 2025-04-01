// Product.tsx
import { useEffect } from "react";
import { ProductProps } from "./types"; // Предполагаем, что типы для Product определены в отдельном файле
import './styles.css';

function Product({ productName, productPrice }: ProductProps) {
  // Выполним действие при размонтировании компонента
  useEffect(() => {
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  return (
    <div className="product-container">
      <div>Product: {productName}</div>
      <div>Price: {productPrice}</div>
    </div>
  );
}

export default Product;
