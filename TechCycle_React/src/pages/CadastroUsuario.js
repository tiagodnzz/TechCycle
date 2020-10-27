import React, { Component } from 'react';
import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';
import '../assets/css/cadastrousuario.css';
import { Link } from 'react-router-dom'

class CadastroUsuario extends Component {
    constructor() {
        super()
        this.state = {

            // Listar - Get
            listarUsu: [],
            // Post
            postUsuario: {
                ListaUsuario: [],
                loginUsuario: '',
                senha: '',
                nome: '',
                email: '',
                departamento: '',
                tipoUsuario: 'agd'
            },
            foto: React.createRef()

        }
    }


    cadastroUsuario = (e) => {
        e.preventDefault();

        let usuario = new FormData();

        usuario.set("loginUsuario", this.state.cadastroUsuario.loginUsuario);
        usuario.set("senha", this.state.cadastroUsuario.senha);
        usuario.set("nome", this.state.cadastroUsuario.nome);
        usuario.set("email", this.state.cadastroUsuario.email);
        usuario.set("foto", this.state.foto.current.files[0]);
        usuario.set("departamento", this.state.cadastroUsuario.departamento);
        usuario.set("tipoUsuario", "agd");
       

        fetch('http://localhost:5000/api/usuario', {
            method: "POST",
            body: usuario,
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log('Não foi possível cadastrar:' + error))
    }


    atualizaState = (input) => {
        this.setState({
            cadastroUsuario: {
                ...this.state.cadastroUsuario,
                [input.target.name]: input.target.value
            }
        })
    }
    
    atualiza = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }



    render() {
        return (
            <div>
                <CabecalhoAdm />
                <main className="cadUsuario_main">
                    <h1>Cadastro de Usuario</h1>
                    <hr></hr>

                    <form className="usuario_formulario" name="form" onSubmit={this.cadastroUsuario.bind(this)}>


                        <section className="coluna_cad_usu_1">

                            <div className="usuario_secao_imagem_cad">
                                {/* <img src="{require("../}" alt="icone de alterar imagem"></img> */}
                                <img src={require("../assets/img/camera.svg")} />
                                
                            </div>


                            <div className='input-wrapper'>
                                <label for='input-file'> <i class="fas fa-upload"></i>     Selecionar um arquivo</label>
                                <input id='input-file' type='file'
                                    arial-label="coloque sua foto"
                                    ref={this.state.foto}
                                />
                                <span id='file-name'></span>
                            </div>

                            <p>*Está foto estará disponibilizada para que o administrador posso vizualiza-lá</p>
                        </section>

                        <section className="coluna_cad_usu">

                            <section className="usuario_row">

                                <div>
                                    <label><i className="far fa-address-book"></i>     Informe seu nome</label>
                                    <input
                                        type="text"
                                        onChange={this.atualizaState.bind(this)}
                                        value={this.state.nome}
                                        required
                                        className="input_box"
                                        name="nome"
                                        placeholder="Digite seu nome" />
                                </div>

                                <div>
                                    <label><i className="far fa-address-book"></i>     Informe seu login</label>
                                    <input
                                        type="text"
                                        value={this.state.loginUsuario}
                                        onChange={this.atualizaState.bind(this)}
                                        className="input_box"
                                        required
                                        name="loginUsuario"
                                        placeholder="Digite seu login" />
                                </div>
                            </section>

                            <section className="usuario_row">
                                <div>
                                    <label><i className="fas fa-lock"></i>     Informe sua senha</label>
                                    <input
                                        id="senha"
                                        type="password"
                                        onChange={this.atualizaState.bind(this)}
                                        value={this.state.senha}
                                        className="input_box"
                                        required
                                        name="senha"
                                        placeholder="Digite sua senha" />
                                </div>

                                <div>
                                    <label><i className="fas fa-lock"></i>     Informe sua profissão</label>
                                    <input
                                        id="senha"
                                        type="text"
                                        className="input_box"
                                        required
                                        name="profissap"
                                        placeholder="Informe sua profissão" />
                                </div>

                            </section>


                            <section className="usuario_row">
                                <div>
                                    <label><i className="far fa-address-card"></i>     Informe seu email</label>
                                    <input
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.atualizaState}
                                        className="input_box"
                                        required
                                        name="email"
                                        placeholder="Digite seu email" />
                                </div>

                                <div>
                                    <label><i className="far fa-address-book"></i>Informe seu departamento</label>
                                    <input
                                        type="text"
                                        value={this.state.departamento}
                                        onChange={this.atualizaState}
                                        className="input_box"
                                        required
                                        name="departamento"
                                        placeholder="Digite seu departamento" />
                                </div>
                            </section>

                            <section className="usuario_row_none">
                            <div>
                                    <label><i className="far fa-address-book"></i>Informe seu Tipo Usuário</label>
                                    <input
                                        type="text"
                                        value='agd'
                                        onChange={this.atualizaState}
                                        className="input_box"
                                        name="tipoUsuario"
                                        placeholder="Digite seu tipo de usuário" />
                                </div>
                            </section>
                            <section className="usuario_row">
                                  
                                <div className="botao_cad_usuario">     
                                <button type="submit" className="btn1"><Link to={'/'}></Link><i className="far fa-arrow-alt-circle-up"></i>Solicitar cadastro</button>
                                </div>
                                
                            </section>
                        </section>

                    </form>
                </main>
                <Rodape />
            </div>
        )
    }
}
export default CadastroUsuario;