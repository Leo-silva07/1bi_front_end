import { useState } from "react";
import ProductCard from "./ProductCard";

export default function App() {
  const [contador, setContador] = useState(0);
  const [listaProdutos, setListaProdutos] = useState([
    { id: 1, nome: "teste 1", valor: 20.00 },
    { id: 2, nome: "teste 2", valor: 22.00 },
    { id: 3, nome: "teste 3", valor: 24.00 },
    { id: 4, nome: "teste 4", valor: 26.00 },
    { id: 5, nome: "teste 5", valor: 28.00 },
  ]);
  const [produto, setProduto] = useState();
  const [valorProduto, setValorProduto] = useState();

  function incrementar() {
    setContador(contador + 1);
  }

  function adicionar() {
    console.log("ADICIONAR PRODUTO")
    const novoProduto = {
      id: listaProdutos.length + 1,
      nome: produto,
      valor: valorProduto
    };

    setListaProdutos([...listaProdutos, novoProduto]);
  }

  return (
    <main>
      <div className="container">
          <h1>contador</h1>
          <h3>{contador}</h3>
          <button onClick={incrementar}>Incrementar</button>
          <hr />

          {listaProdutos &&
            <div>
              <h3>Lista de Compras</h3>
              <ul>
                {listaProdutos.map(item => (
                  <li key={item.id}>
                    Nome: {item.nome} 
                    Valor: R${item.valor}
                  </li>
                ))}
              </ul>
            </div>
          }
          <br />
          <label htmlFor="produto">Produto:</label>
          <input id="produto" type="text" value={produto} onChange={e => setProduto(e.target.value)} />
          <br />
          <label htmlFor="valor">Valor:</label>
          <input id="valor" type="text" value={valorProduto} onChange={e => setValorProduto(e.target.value)} />
          <br />
          <button onClick={adicionar}>Adicionar</button>
      </div>
    </main>
  );
} 