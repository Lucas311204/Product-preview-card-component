import Produto from "./product-image.jpg";
import "./App.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

function App() {
  return (
    <div className="container">
      <div className="Card">
        <div className="Imagem">
          <img src={Produto} alt="produto"></img>
        </div>

        <div id="conteudo">
          <h3 id="titulo">P E R F U M E</h3>

          <h1>Gabrielle Essence Eau de Parfum</h1>
          <p class="texto">
            A floral, solar and voluptuous interpretation composed by Oliver
            Polge, Perfumer-Creator for the house of CHANEL
          </p>
          <div class="valores">
            <h1 id="preco1">$149.99</h1>
            <h3 id="preco2">$169.99</h3>
          </div>
          <button>
            <AiOutlineShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
