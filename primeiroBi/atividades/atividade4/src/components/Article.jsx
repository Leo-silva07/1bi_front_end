function Article(props) {
    return (
        <article>
            <p className="autoria">Por {props.autor} — {props.data}</p>

            <section id="historia">
                <h2>{props.titulo}</h2>
                <p>{props.conteudo}</p>

                <div className="selecoes-br">
                    <figure>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Brasil_-_1958.jpg/330px-Brasil_-_1958.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
                            alt="Seleção Brasileira 1958"
                        />
                        <figcaption>Seleção Brasileira 1958</figcaption>
                    </figure>
                    <figure>
                        <img
                            src="https://infograficos.estadao.com.br/esportes/copa/2018/historia-das-copas-do-mundo-de-futebol/wp-content/uploads/2018/05/Brasil-1962-time-posado-Arquivo-Associated-Press-AE.jpg"
                            alt="Seleção Brasileira 1962"
                        />
                        <figcaption>Seleção Brasileira 1962</figcaption>
                    </figure>
                    <figure>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Brazil_national_team_1970.jpg/330px-Brazil_national_team_1970.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
                            alt="Seleção Brasileira 1970"
                        />
                        <figcaption>Seleção Brasileira 1970</figcaption>
                    </figure>
                    <figure>
                        <img
                            src="https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/07/Selecao-Brasileira-conquistou-o-tetra-da-Copa-do-Mundo-em-1994-e1721221547915.jpg?w=681"
                            alt="Seleção Brasileira 1994"
                        />
                        <figcaption>Seleção Brasileira 1994</figcaption>
                    </figure>
                    <figure>
                        <img
                            src="https://www.rbsdirect.com.br/imagesrc/25637871.jpg"
                            alt="Seleção Brasileira 2002"
                        />
                        <figcaption>Seleção Brasileira 2002</figcaption>
                    </figure>
                </div>
            </section>

            <section id="tabela">
                <h2 className="tabela-br">Tabela do Brasileirão 2026</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Posição</th>
                            <th>Time</th>
                            <th>P</th>
                            <th>J</th>
                            <th>V</th>
                            <th>E</th>
                            <th>D</th>
                            <th>GP</th>
                            <th>GC</th>
                            <th>SG</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1º</td>
                            <td>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original"
                                    className="foto-time"
                                    alt="Corinthians"
                                />
                                Corinthians
                            </td>
                            <td>75</td><td>34</td><td>23</td><td>6</td><td>5</td><td>58</td><td>28</td><td>+ 30</td>
                        </tr>
                        <tr>
                            <td>2º</td>
                            <td>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/4/43/Athletico_Paranaense_%28Logo_2019%29.svg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original"
                                    alt="Athletico-PR"
                                    className="foto-time"
                                />
                                Athletico-PR
                            </td>
                            <td>70</td><td>34</td><td>21</td><td>7</td><td>6</td><td>52</td><td>30</td><td>+ 22</td>
                        </tr>
                        <tr>
                            <td>3º</td>
                            <td>
                                <img
                                    src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Fluminense_Football_Club.svg/250px-Fluminense_Football_Club.svg.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
                                    alt="Fluminense"
                                    className="foto-time"
                                />
                                Fluminense
                            </td>
                            <td>65</td><td>34</td><td>19</td><td>8</td><td>7</td><td>47</td><td>33</td><td>+ 14</td>
                        </tr>
                        <tr>
                            <td>4º</td>
                            <td>
                                <img
                                    src="https://a.espncdn.com/i/teamlogos/soccer/500/9967.png"
                                    alt="Bahia"
                                    className="foto-time"
                                />
                                Bahia
                            </td>
                            <td>60</td><td>34</td><td>17</td><td>9</td><td>8</td><td>44</td><td>35</td><td>+ 9</td>
                        </tr>
                        <tr>
                            <td>5º</td>
                            <td>
                                <img
                                    src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg/250px-Cruzeiro_Esporte_Clube_%28logo%29.svg.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
                                    alt="Cruzeiro"
                                    className="foto-time"
                                />
                                Cruzeiro
                            </td>
                            <td>55</td><td>34</td><td>15</td><td>10</td><td>9</td><td>41</td><td>38</td><td>+ 3</td>
                        </tr>
                        <tr>
                            <td>6º</td>
                            <td>
                                <img
                                    src="https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Coritiba_Foot_Ball_Club_logo.svg/250px-Coritiba_Foot_Ball_Club_logo.svg.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
                                    alt="Coritiba"
                                    className="foto-time"
                                />
                                Coritiba
                            </td>
                            <td>50</td><td>34</td><td>13</td><td>11</td><td>10</td><td>38</td><td>39</td><td>- 1</td>
                        </tr>
                        <tr>
                            <td>7º</td>
                            <td>
                                <img
                                    src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Logo_of_Clube_Atl%C3%A9tico_Mineiro.svg/250px-Logo_of_Clube_Atl%C3%A9tico_Mineiro.svg.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
                                    alt="Atlético"
                                    className="foto-time"
                                />
                                Atlético-MG
                            </td>
                            <td>45</td><td>34</td><td>12</td><td>9</td><td>13</td><td>36</td><td>41</td><td>- 5</td>
                        </tr>
                        <tr>
                            <td>8º</td>
                            <td>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/pt/9/9e/RedBullBragantino.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original"
                                    alt="Bragantino"
                                    className="foto-time"
                                />
                                Bragantino
                            </td>
                            <td>40</td><td>34</td><td>10</td><td>10</td><td>14</td><td>33</td><td>44</td><td>- 11</td>
                        </tr>
                        <tr>
                            <td>9º</td>
                            <td>
                                <img
                                    src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2026.png"
                                    alt="São Paulo"
                                    className="foto-time"
                                />
                                São Paulo
                            </td>
                            <td>35</td><td>34</td><td>9</td><td>8</td><td>17</td><td>30</td><td>48</td><td>- 18</td>
                        </tr>
                        <tr>
                            <td>10º</td>
                            <td>
                                <img
                                    src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Clube_de_Regatas_do_Flamengo_logo.svg/250px-Clube_de_Regatas_do_Flamengo_logo.svg.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
                                    alt="Flamengo"
                                    className="foto-time"
                                />
                                Flamengo
                            </td>
                            <td>30</td><td>34</td><td>7</td><td>9</td><td>18</td><td>27</td><td>50</td><td>- 23</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section id="melhor-time">
                <h2>Melhor time do Brasil</h2>
                <div className="conteudo-lado-a-lado">
                    <p>
                        O Sport Club Corinthians Paulista foi fundado em 1º de setembro de 1910, na cidade de São
                        Paulo, por um grupo de trabalhadores. O clube recebeu esse nome inspirado no time inglês
                        Corinthian Football Club e rapidamente conquistou uma grande torcida popular. Ao longo de
                        sua história, o Corinthians se tornou um dos maiores clubes do Brasil, conquistando títulos
                        importantes como o Campeonato Brasileiro, a Copa do Brasil, a Libertadores e o Mundial de
                        Clubes.
                    </p>
                    <figure>
                        <img
                            id="foto-Corinthians"
                            src="https://cdn.meutimao.com.br/_upload/noticia/2022/01/26/a-historia-do-corinthians-pode-ser-facilmente-ri941w.jpg"
                            alt="Escudos do Corinthians"
                        />
                        <figcaption>Escudos do Corinthians</figcaption>
                    </figure>
                </div>
            </section>

            <section id="assista">
                <h2>Assista</h2>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ADi1A1dX9wA"
                    title="Youtube video player"
                    allowFullScreen
                ></iframe>
            </section>
        </article>
    );
}

export default Article;