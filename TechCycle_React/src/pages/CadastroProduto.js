import React, {Component} from 'react';

import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape  from '../componentes/Rodape';

import '../assets/css/padrao.css';
import '../assets/css/cadastroproduto.css';


class CadastroProduto extends Component
{
    constructor(props){
        super(props);
        this.state = {

            postProduto:{
                listaProduto: [],
                nomeProduto: '',
                modelo: '',
                marca:'',
                processador:'',
                dataLancamento:'',
                codIdentificacao:'',
                descricao: ''
            },
            listamarca:[]
        }
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
    cadastraProduto = (e) => {
        e.preventDefault();

        let produto = {
            nomeProduto: this.state.postProduto.nomeProduto,
            modelo: this.state.postProduto.modelo,
            idMarca: this.state.postProduto.marca,
            processador: this.state.postProduto.processador,
            dataLancamento: this.state.postProduto.dataLancamento,
            codIdentificacao: this.state.postProduto.codIdentificacao,
            descricao: this.state.postProduto.descricao
        }

        fetch('http://localhost:5000/api/produto', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
            body: JSON.stringify(produto)
        })
        
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log('Não foi possível cadastrar:' + error)) 
    }

    atualizaState = (input) => {

        this.setState({
            postProduto: {
                ...this.state.postProduto,
                [input.target.name]: input.target.value
            }
        })
    }
    componentDidMount(){
        this.buscarMarca();
    }
    
    
    render(){
        return(
            <div>
            <CabecalhoAdm/>
            <main>
        <section className="titulo_cad_produto">
            <h1>Cadastro de Produtos</h1>
            <hr/>
        </section>
        <div className="container_cad_produto">
            
            <section className="form_cadastro">
                <form onSubmit={this.cadastraProduto} className="formulario">

                    <section className="container_form_cad_produto">

                        <section className="row_cad_produto">
                            <div>
                                <label for="nome"><i className="fas fa-desktop"></i>Nome do equipamento</label>
                                <input
                                type="text" 
                                id="input_box" 
                                name="nomeProduto" 
                                placeholder="Nome..."
                                value={this.state.nomeProduto}
                                onChange={this.atualizaState}
                                />
                               
                            </div>
                            <div>
                                <label for="modelo"><i className="far fa-keyboard"></i> Modelo do equipamento</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="modelo" 
                                placeholder="Modelo..."
                                value={this.state.modelo}
                                onChange={this.atualizaState}
                                />
                                
                            </div>
                        </section>

                        <section className="row_cad_produto">
                            <div>
                                <label for="marca"><i className="fas fa-industry"></i> Fabricante do equipamento</label>
                                <select
                                    name="marca"
                                    value={this.state.marca}
                                    onChange={this.atualizaState}
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
                                <label for="procecssador"><i className="fas fa-gopuram"></i>Processador</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="processador" 
                                placeholder="Precessador..."
                                value={this.state.processador}
                                onChange={this.atualizaState}
                                />
                                
                            </div>
                        </section>

                        <section className="row_cad_produto">
                            <div>
                                <label for="lancamento"><i className="far fa-calendar-alt"></i> Data de lançamento</label>
                                <input 
                                type="date" 
                                id="input_box" 
                                name="dataLancamento" 
                                placeholder="Data de lançamento..."
                                value={this.state.dataLancamento}
                                onChange={this.atualizaState}
                                />
                                

                            </div>
                            <div>
                                <label for="codigoIdentificacao"><i className="fas fa-qrcode"></i> Codigo de identificação</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="codIdentificacao" 
                                placeholder="Identificação..."
                                value={this.state.codIdentificacao}
                                onChange={this.atualizaState}
                                />
                                
                            </div>
                        </section>
                        <section className="descricao_cad_produto">
                        <label for="descricao"><i className="fas fa-desktop"></i>Descrição do equipamento</label>
                        <textarea 
                        name="descricao" 
                        cols="30" 
                        rows="10"
                        placeholder="Descrição..."
                        value={this.state.descricao}
                        onChange={this.atualizaState.bind(this)}
                        />
                        </section>

                    <div className="botao_cad_produto">
                            <button type="submit" className="bot_cad_cadastrar">
                            <i className="fas fa-plus-circle"></i> Adicionar produto
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
export default CadastroProduto;