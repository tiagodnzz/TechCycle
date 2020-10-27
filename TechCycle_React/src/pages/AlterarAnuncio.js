import React, { Component } from 'react';
// import ImageUploader from 'react-images-upload';
import CabecalhoUser from '../componentes/CabecalhoUser';
import Rodape from '../componentes/Rodape';

import '../assets/css/padrao.css';
import '../assets/css/alteraranuncio.css';

class AlterarAnuncio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaproduto: [],
            nomeProduto: '',
            descricao: '',
            produtoSelecionado: {},
            pictures: [],

            putAnuncio: {
                listaAnuncio: [],
                cadastrarPreco: '',
                dataExpiracao: ''
            },
            

            preco : '',
            data : '',

            fileInput: React.createRef(),
        }
        this.onDrop = this.onDrop.bind(this)

    }
    onDrop(picture) {
        this.setState({
        pictures: this.state.pictures.concat(picture),
        });
    }
    cadastraAnuncio(idProduto){
        // e.preventDefault();

        console.log(idProduto + " amvfjhkvjbnmsa")

        let anuncio = new FormData();

        anuncio.set("cadastrarPreco", this.state.cadastraAnuncio.cadastrarPreco);
        anuncio.set("dataExpiracao", this.state.cadastraAnuncio.dataExpiracao);

        fetch('http://localhost:5000/api/anuncio', {
            method: "POST",
            body: anuncio,
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log('Não foi possível cadastrar:' + error))
    }
    
    buscarProdutos() {
        fetch('http://localhost:5000/api/produto')
            .then(resposta => resposta.json())
            .then(data => {
                console.log(data);
                this.setState({ listaproduto: data });
                console.log(this.state.listaproduto);
            })
            .catch((erro) => {
                console.log(erro);
            })
    }

    atualizaState = (input) => {
        this.setState({
            cadastraAnuncio: {
                ...this.state.cadastraAnuncio,
                [input.target.name]: input.target.value
            }
        })
    }

    componentDidMount() {
        this.buscarProdutos();
    }

    render() {
        console.log(this.state.listaproduto)
        return (
            <div>
                {<CabecalhoUser />}
                <main className="conteudo_cdu">

<div className="titulo_cdu">
    <h1 className="h1_cdu">Alterar anúncio</h1>
    <hr className="linha_cadastrodeanuncio_cdu" />
</div>
<section id="container_selecao_anuncio_cdu">

    <section className="criar_anuncio_cdu">

        <form action="#" method="POST" className="selecaodoanuncio_cdu1">
            
        <section className="sessao_produtos_cda">
        <input type="text" alt="Selecione o produto" placeholder="Selecione o produto"
                className="barraanuncio_cdu1" />
                
        {
            this.state.listaproduto.map(produto => {
                return (
                    <div className="notebooksanuncio_cdu" key={produto.idProduto}
                        onClick={e => {
                            // this.cadastraAnuncio(produto.idProduto)
                            console.log(produto) 
                            this.setState({produtoSelecionado: produto})
                            }}>
                        <div className="imagem_notebook">
                            <img src={require("../assets/img/Dell-Inspiron-I14-7472-A20G.png")} />
                        </div>
                        <p>{produto.nomeProduto}</p>
                    </div>
                )
            })
        }
        </section>




<section className="descricao_do_produto_cdu1">

<section className="informacoes_do_produto_cdu_2">

    <div className="amostra_do_produto_cdu1">

    <div className="usuario_secao_imagem_cad1">
<img clasName="imgcda123" src={require("../assets/img/camera.svg")} />
</div>


<div class='input-wrapper'>
<label for='input-file'> <i class="fas fa-upload"></i>     Selecionar um arquivo</label>
<input id='input-file' type='file'
arial-label="coloque sua foto"
ref={this.state.foto}
/>
<span id='file-name'></span>
</div>
</div> 



                        <div className="amostra_descricao_cdu" >
                            <p><span>Descrição do produto:</span></p>
                            <h2>{this.state.produtoSelecionado.nomeProduto}</h2>
                            <p>Número do modelo: {this.state.produtoSelecionado.modelo}</p>
                            <p> {this.state.produtoSelecionado.descricao}</p>
                            <p>Memória: {this.state.produtoSelecionado.memoria}</p> 
                        </div>
        </section>
        
        <section className="formulario_anuncio_cdu">

            <div className="preco_expiracao_cdu">
                    <div className="campos">
                        <label for="campo_preco">Preço do equipamento:</label>
                        <input onChange={this.atualizaState} 
                        name="campo_preco" 
                        type="text" 
                        alt="Preço..." 
                        placeholder="Preço do equipamento"
                        className="barra_preco_expiracao_cdu" />
                    </div>
            </div>

            <div className="preco_expiracao_cdu">
                <form action="#" method="POST" className="selecaodoanuncio_cdu">
                    <div className="campos">
                        <label for="campo_expiracao">Data de expiração do anúncio:</label>
                        <input onChange={this.atualizaState} name="campo_expiracao" type="date" alt="Data de expiração"
                            placeholder="Data de expiração" className="barra_preco_expiracao_cdu" />
                    </div>
                </form>
            </div>
            

            <div className="informar_avaliacao"> 
                    <legend>Avaliação do equipamento:</legend>
                    <div className="tipos_avaliacao">
            </div> 



<form className="rating-form" action="#" method="post" name="rating-movie">
<fieldset className="form-group">
    
    <legend className="form-legend">Rating:</legend>
    
    <div className="form-item">

    <input id="rating-3" name="rating" type="radio" value="3" />
    <label for="rating-3" data-value="3">
        <span className="rating-star">
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star"></i>
        </span>
        {/* <span className="ir">3</span> */}
    </label>
    <input id="rating-2" name="rating" type="radio" value="2"/>
    <label for="rating-2" data-value="2">
        <span className="rating-star">
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star"></i>
        </span>
        {/* <span className="ir">2</span> */}
    </label>
    <input id="rating-1" name="rating" type="radio" value="1" />
    <label for="rating-1" data-value="1">
        <span className="rating-star">
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star"></i>
        </span>
        {/* <span className="ir">1</span> */}
    </label>
    
    {/* <div className="form-action">
        <input className="btn-reset" type="reset" value="Reset" />   
      </div> */}

    {/* <div className="form-output">
        ? / 5
      </div> */}
    
    </div>
    
</fieldset>
</form>
</div>
        </section>
        <div className="botoes">
                                        <div className="botao_deletar_cdu2">
                                            <button className="botao_editar_cdu2">
                                                <i className="far fa-trash-alt"></i>
                                                <a href="./home">Deletar anúncio</a>
                                            </button>
                                        </div>

                                        <div className="botao_adicionar_cdu3">
                                            <button type="submit" className="botao_editar_cdu3">
                                                <i className="far fa-edit"></i>
                                                <a href="./home">Editar anúncio</a>
                                            </button>
                                        </div>
                                        </div>
    </section>
        </form>
        </section>
</section>

</main>
                {<Rodape />}
            </div>
        );
    }
}
export default AlterarAnuncio;