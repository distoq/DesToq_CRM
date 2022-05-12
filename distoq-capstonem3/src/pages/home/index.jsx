import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";

import { ShowcaseContext } from "../../Providers/showcase/";
import { CartContext } from "../../Providers/cart";

import { GrUserAdmin } from "react-icons/gr";

const Home = ({ product }) => {
  const navigate = useNavigate();
  const tokenUser = JSON.parse(localStorage.getItem("@DEStoq:token")) || "";
  const { decodedToken, isExpired } = useJwt(tokenUser);
  const { listProducts } = useContext(ShowcaseContext);
  const { cart, addCart } = useContext(CartContext);
  const [isAdmin, setIsAdmin] = useState(false);
  console.log("cart na Home page", cart);

  if (decodedToken?.sub === "1") {
    return setIsAdmin(!isAdmin);
  }

  return (
    <main>
      <h1>hamburgueria</h1>
      <header>
        <button onClick={() => navigate("/cart")}>ver carrinho</button>
        <button disable={isAdmin} onClick={() => navigate("/dashboard")}>
          <GrUserAdmin />
        </button>
      </header>
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
