import React, {Component} from 'react';

import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape  from '../componentes/Rodape';

import '../assets/css/padrao.css';
import '../assets/css/cadastroproduto.css';




class EditarProduto extends Component
{ 
    constructor(props){
    super(props);
    this.state = {
            idProduto:{
            },
            idMarca: {
            },
            produto : [],
            marca : [],
            listamarca: [],
            editaProduto: {
                IdProduto: '',
                nomeProduto: '',
                modelo: '',
                marca:'',
                processador:'',
                dataLancamento:'',
                codIdentificacao:'',
                descricao: ''
            }
        }
    }
    
    buscaProduto(){
        console.log(this.props.location.state.idProduto)
        fetch('http://localhost:5000/api/produto/' + this.props.location.state.idProduto)
        .then(resposta => resposta.json())
        .then(data => this.setState({ produto : data}))
        .catch(erro => console.log(erro))
    }

    buscarMarca() {
        fetch('http://localhost:5000/api/marca')
            .then(resposta => resposta.json())
            .then(data => {
                this.setState({ listamarca: data });
            })
            .catch((erro) => {
                console.log(erro);
            })
    }
    alteraProduto = (event) =>
    {
        event.preventDefault();

        this.salvaAlteracoes()
    }
    salvaAlteracoes = () =>
    {
      
        fetch("http://localhost:5000/api/produto/"+ this.state.produto.idProduto,
        {
            method : "PUT",
            body: JSON.stringify(this.state.editaProduto),
            headers : {
              "Content-Type" : "application/json"
            }
        })
        .then(response => response.json())
        .then(
          setTimeout(() => {
            this.buscaProduto()
          }, 2000)
        )
        .catch(error => console.log(error))
    }

    atualizaState = (input) => {

        this.setState({
            editaProduto : {
                ...this.state.editaProduto,
                IdProduto: this.state.produto.idProduto,
                [input.target.name]: input.target.value
            }
        })
    }

    
    componentDidMount(){
        this.buscaProduto()
        this.buscarMarca()
        this.setState({
            idMarca : this.props.location.state.idMarca,
        })
        
    }

    render(){
        
        return(
            <div>
                <CabecalhoAdm/>
                <main>
        <section className="titulo_cad_produto">
            <h1>Editar Produtos</h1>
            <hr/>
        </section>
        <div className="container_cad_produto">
            
            <section className="form_cadastro">
                <form  onSubmit={this.alteraProduto} className="formulario">

                    <section className="container_form_cad_produto">

                        <section className="row_cad_produto">
                            <div>
                                <label for="nome"><i className="fas fa-desktop"></i>Nome do equipamento: </label>
                                <input
                                type="text" 
                                id="input_box" 
                                name="nomeProduto" 
                                value={this.state.editaProduto.nomeProduto}
                                placeholder={this.state.produto.nomeProduto}
                                onChange={this.atualizaState.bind(this)}
                                />
                               
                            </div>
                            <div>
                                <label for="modelo"><i className="far fa-keyboard"></i> Modelo do equipamento</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="modelo" 
                                placeholder={this.state.produto.modelo}
                                value={this.state.editaProduto.modelo}
                                onChange={this.atualizaState.bind(this)}
                                />
                                
                            </div>
                        </section>

                        <section className="row_cad_produto">
                            <div>
                                <label for="marca"><i className="fas fa-industry"></i> Fabricante do equipamento</label>
                                <select
                                name="marca" 
                                value={this.state.produto.marca}
                                onChange={this.atualizaState.bind(this)}
                                >
                                <option value="">Selecione uma marca</option>
                                {
                                    this.state.listamarca.map(function(marca){
                                        return <option key={marca.idMarca} value={marca.idMarca}>{marca.nomeMarca}</option>
                                    })
                                }   
                                </select>
                            </div>
                            <div>
                                <label for="processador"><i className="fas fa-gopuram"></i>Processador</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="processador" 
                                placeholder={this.state.produto.processador}
                                value={this.state.editaProduto.processador}
                                onChange={this.atualizaState.bind(this)}
                                />
                                
                            </div>
                        </section>

                        <section className="row_cad_produto">
                            <div>
                                <label for="dataLancamento"><i className="far fa-calendar-alt"></i> Data de lançamento</label>
                                <input 
                                type="date" 
                                id="input_box" 
                                name="dataLancamento" 
                                placeholder={this.state.produto.dataLancamento}
                                value={this.state.editaProduto.dataLancamento}
                                onChange={this.atualizaState.bind(this)}
                                />
                                

                            </div>
                            <div>
                                <label for="codIdentificacao"><i className="fas fa-qrcode"></i> Codigo de identificação</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="codIdentificacao" 
                                placeholder={this.state.produto.codIdentificacao}
                                value={this.state.editaProduto.codIdentificacao}
                                onChange={this.atualizaState.bind(this)}
                                />
                                
                            </div>
                        </section>
                        <section className="descricao_cad_produto">
                        <label for="descricao"><i className="fas fa-desktop"></i>Descrição do equipamento</label>

                        <textarea 
                        name="descricao" 
                        cols="30" 
                        rows="10"
                        placeholder={this.state.produto.descricao}
                        value={this.state.editaProduto.descricao}
                        onChange={this.atualizaState.bind(this)}
                        />
                        </section>

                    <div className="botao_cad_produto">
                            <button type="submit" className="bot_cad_cadastrar">
                            <i className="fas fa-plus-circle"></i> Editar Produto
                        </button>
                    </div>

                    </section>
                </form>
            </section>
        </div>
    </main>
                <Rodape/>
            </div>
        );
    }
}
export default EditarProduto;
