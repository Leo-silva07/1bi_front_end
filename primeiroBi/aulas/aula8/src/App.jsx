import { useState } from "react";
import ProductCard from "./ProductCard";

export default function App() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  return (
    <div className="container">
        <h1>contador</h1>
        <h3>{contador}</h3>
        <button onClick={incrementar}>Incrementar</button>
        <hr />
        <h4>Lista de Produtos</h4>
        <section>
        {listaProdutos.map(produto => 
          <ProductCard key={produto.id} produto={produto} />
        )}
        </section>
    </div>
  );
} 