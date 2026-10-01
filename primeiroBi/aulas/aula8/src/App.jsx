export default function App() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  return (
    <div>
        <h1>contador</h1>
        <h3>{contador}</h3>
        <button onClick={incrementar}>Incrementar</button>
    </div>
  )
} 