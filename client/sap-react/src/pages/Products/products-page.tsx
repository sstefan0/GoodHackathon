import { useEffect, useState } from "react";
import agent from "../../api/agent";
interface Product {
  Name: string;
  ImageData: string;
  Description: string;
}
const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Products.getAllProducts()
      .then((items) => {
        setProducts(items);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {products.length === 0 ? (
        <p>Učitavanje...</p>
      ) : (
        products.map((item) => (
          <div>
            <p>{item.Name}</p>
            <p>{item.Description}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default Products;
