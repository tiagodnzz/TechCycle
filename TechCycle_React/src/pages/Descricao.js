import React, { Component } from 'react';
import Axios from 'axios';
import CabecalhoUser from '../componentes/CabecalhoUser';
import Rodape from '../componentes/Rodape';
import '../assets/css/descricao.css';
import { parseJwt } from '../services/auth';
import { Link } from 'react-router-dom';

class Descricao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anuncio: {
                idProdutoNavigation : {
                    nomeProduto : '',
                    descricao : ''
                }
            },
            idUsuario : parseJwt().IdUsuario
        }
        this.buscarAnuncio = this.buscarAnuncio.bind(this);
    }

    buscarAnuncio(){
        // console.log(this.state.idUsuario)
        fetch('http://localhost:5000/api/anuncio/' + this.props.location.state.idAnuncio)
        .then(response => response.json())
        .then(data =>{
            this.setState({ anuncio : data })
        }).catch((erro) => console.log(erro))
    }

    componentDidMount(){
        this.buscarAnuncio();
    }

    cadastrarInteresse(){
        let interesse = {
            idUsuario : parseInt(this.state.idUsuario),
            idAnuncio : this.props.location.state.idAnuncio,
            aprovado : 'Não'
        }

        console.log(parseInt(this.state.idUsuario))
  
        fetch('http://localhost:5000/api/interesse',{
            method : 'POST',
            body : JSON.stringify(interesse) ,           
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
          })
          .then(response => response.json())
          .then(response => {
              console.log(response);
          })
          .catch(error => console.log('Não foi possível cadastrar:' + error)) 
      }
    

    render() { 
        return (
            <div className="App">
                <CabecalhoUser/>
                <main>
                    <section className="anuncio">
                        <section className="titulo_descricao">
                            <h1>Descrição do produto</h1>
                            <hr/>
                        </section>
                                <section className="produto_avaliacao">
                                            <section className="descricao">
                                                <section className="anuncio_descritivo">
                                                    <section className="foto_principal">
                                                        {/* <img className="foto_exibicao" src={require('../assets/img/macp1.png')} alt="foto" /> */}
                                                        <img src={"http://localhost:5000/Resources/Anuncio/" + this.state.anuncio.foto}/>
                                                        <hr />
                                                        <section className="conteudo_descricao">
                                                            <h3>{this.state.anuncio.idProdutoNavigation.nomeProduto}</h3>
                                                            <p>{this.state.anuncio.idProdutoNavigation.descricao}</p>
                                                            <h4>R$ {this.state.anuncio.preco},00</h4>
                                                        </section>
                                                    </section>
                                                </section>

                                                <section className="anuncio_avaliacao"></section>
                                                <section className="secao_avaliacao">
                                                    <div className="box_classificacao">
                                                        <h3>avaliação <i className="far fa-star"></i></h3>

                                                        <section className="avaliacoes">
                                                            <section className="quadro_avaliacao">
                                                                <div className="box_avaliacao">
                                                                    <p>bom</p>
                                                                    <p><span className="fa fa-star checked"></span></p>
                                                                </div>
                                                                <p className="leve_descricao">Aparelho com leves sinais uso, e com um bom desempenho;</p>
                                                            </section>

                                                            <section className="quadro_avaliacao">
                                                                <div className="box_avaliacao">
                                                                    <p>muito bom</p>
                                                                    <p><span className="fa fa-star checked"></span><span className="fa fa-star checked"></span>
                                                                    </p>
                                                                </div>
                                                                <p className="leve_descricao">Aparelho com alguns sinais uso, e com um bom desempenho;</p>
                                                            </section>

                                                            <section className="quadro_avaliacao colorido">
                                                                <div className="box_avaliacao colorido-borda">
                                                                    <p>ótimo</p>
                                                                    <p><span className="fa fa-star checked"></span><span
                                                                        className="fa fa-star checked"></span><span className="fa fa-star checked"></span></p>
                                                                </div>
                                                                <p className="leve_descricao">Aparelho com leves sinais uso, e com ótimo desempenho;</p>
                                                            </section>
                                                        </section>
                                                    </div>
                                                    <div className="btn_descricao" onClick={e => {this.cadastrarInteresse()}}>
                                                        <Link to={'/listainteresse'}><button><i className="fas fa-plus"></i> Adicionar a
                                                        interessados</button></Link>
                                                    </div>
                                                </section>
                                            </section>
                        </section>
                                     

                        <section className="titulo_comentarios">
                            <hr />
                            <h2>Comentários</h2>
                        </section>

                        <section className="comentarios">
                            <section className="comentarios_usuarios">
                                <div className="box_comentarios">
                                    <div className="dados_usuario">
                                        <div className="foto_usuario usuario1">
                                            <img src={require('../assets/img/chris.jpg')} alt="#"/>
                                        </div>
                                        <p>Chris Evans</p>
                                    </div>
                                    <p>Comprei uma unidade deste computador e amei, muito útil este anúncio!!!</p>
                                </div>
                                
                            </section>
                            <section className="comentar_anuncio">
                                <div className="comentar">
                                    <form action="#" className="comentar_anuncio">
                                        <i className="far fa-file-alt"></i>
                                        <textarea name="comentario" placeholder="adicionar comentario" id="comentario" cols="30"
                                            rows="10"></textarea>
                                    </form>
                                </div>
                                <button className="adicionar_comentario">
                                    <i className="far fa-comment"></i> Adicionar comentário...
                                </button>
                            </section>
                        </section>
                    </section>
                    <Rodape />
                </main>
            </div>
        )
    }
}

export default Descricao;