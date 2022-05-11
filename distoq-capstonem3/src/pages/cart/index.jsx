import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, deleteCart } = useContext(CartContext);
  console.log("produtos no Cart page", cart); //ta vindo vazio

  const sum = cart.reduce((previous, current) => {
    return previous + Number(current.price);
  }, 0);

  return (
    <section>
      <h1>carrinho de compras:</h1>
      <article>
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              <figure>
                <div className="divFigure">
                  <p>{product.name}</p>
                  <img src={product.image} alt={product.name} />
                  <p>R$ {product.price}</p>
                </div>
                <div className="divButton">
                  <button onClick={() => deleteCart(product.id)}>X</button>
                </div>
              </figure>
            </li>
          ))}
        </ul>
        <aside>
          <div className="divCart">
            <h3>precisa de mais?</h3>
          </div>
          <div className="divTotal">
            <span>Total:</span>
            <span>R$ {sum.toFixed(2)}</span>
          </div>
          <button className="btnCheckout" onClick={() => navigate("/")}>
            finalizar compra
          </button>
          <button className="btnBuying" onClick={() => navigate("/home")}>
            continuar comprando
          </button>
        </aside>
      </article>
    </section>
  );
};

export default Cart;
