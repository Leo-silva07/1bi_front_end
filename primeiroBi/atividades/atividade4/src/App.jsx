import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    const post = {
        titulo: "História do Futebol Brasileiro",
        autor: "Leonardo Almeida Silva",
        data: "30/09/2026",
        conteudo:
            "O futebol chegou ao Brasil no final do século XIX, sendo Charles Miller uma das figuras mais importantes na introdução do esporte no país. Inicialmente praticado pelas classes mais altas, o futebol rapidamente se popularizou e passou a fazer parte da cultura brasileira. Ao longo dos anos, o Brasil se tornou uma das maiores potências do futebol mundial, conquistando cinco Copas do Mundo. Jogadores como Pelé, Garrincha, Romário, Ronaldo e Ronaldinho Gaúcho, entre outros, ajudaram a construir a história e a tradição do país como a \"terra do futebol\"."
    };

    return (
        <div>
            <Header />
            <Navigation />
            <Article
                titulo={post.titulo}
                autor={post.autor}
                data={post.data}
                conteudo={post.conteudo}
            />
            <Sidebar />
            <Footer />
        </div>
    );
}

export default App;