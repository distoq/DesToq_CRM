import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShowcaseContext } from "../../Providers/showcase";
import { CartContext } from "../../Providers/cart";

const Home = ({ product }) => {
  const navigate = useNavigate();
  const { listProducts } = useContext(ShowcaseContext);
  const { cart, addCart } = useContext(CartContext);
  console.log("cart na Home page", cart);

  return (
    <main>
      <h1>hamburgueria</h1>
      <button onClick={() => navigate("/cart")}>ver carrinho</button>
      <ul>
        {listProducts.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <h4>R$ {product.price}</h4>
            <button type="button" onClick={() => addCart(product)}>
              comprar
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
