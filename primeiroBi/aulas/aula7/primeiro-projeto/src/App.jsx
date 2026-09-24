import "./App.css" 
import Header from "./components/cabecalho";
 
export default function app() {
  const qtdPosts = 20;
  const possuiAssinatura = false;

  return(
    <main id="container">
      <Header
        habilitado={possuiAssinatura} 
        quantidadePosts={qtdPosts} />

      <section>
        <h1>Nossos últimos posts</h1>
        <article>
          <h1>Corinthians 2x0 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>LDU 1x0 Porcada</h1>
          <p>LDU faz festa no chiqueiro</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
        <article>
          <h1>Corinthians 2x1 Varmengo</h1>
          <p>O melhor do mundo detona o varmengo</p>
        </article>
      </section>
    </main>
  )
}