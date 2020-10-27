import React, { Component } from 'react';
import CabecalhoUser from '../componentes/CabecalhoUser';
import Rodape from '../componentes/Rodape';
import '../assets/css/perfilusuario.css';
import { parseJwt } from '../services/auth';
import {Link} from 'react-router-dom';

class PerfilUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idUser: parseJwt().IdUsuario,
            usuario: '',
            loginUsuario: '',
            senha: '',
            nome: '',
            email: '',
            foto: '',
            departamento: '',
            tipoUsuario: ''
        }
        this.buscaUsuario = this.buscaUsuario.bind(this)
    }

    buscaUsuario() {
            fetch('http://localhost:5000/api/usuario/' + this.state.idUser)
            .then(resposta => resposta.json())
            .then(data => this.setState({ usuario: data }))
            .catch(erro => console.log(erro))
            console.log(this.state.idUsuario)
    }

    componentDidMount() {
        this.buscaUsuario();
    }
    render() {
        return (
            <div>
                <CabecalhoUser />
                <main className="perfilusuario_main">
                    <h1>Perfil do usuário</h1>
                    <hr></hr>

                    <section className="conteudo_pu">
                        <div className="coluna_pu_imagem">
                            <div className="secao_imagem_pu">
                                <img src={"http://localhost:5000/Resources/Usuario/" + this.state.usuario.foto} />
                            </div>

                        </div>
                        <section className="coluna_pu_conteudo">
                            

                               
                                    <div className="linha_pu">

                                        <div className="caixa_info_pu" >
                                            <label>Nome</label>
                                            <div className="box_pu">
                                                <p>{this.state.usuario.nome}</p>
                                            </div>
                                        </div>
        
                                        <div className="caixa_info_pu">
                                            <label>Login</label>
                                            <div className="box_pu">
                                                <p>{this.state.usuario.loginUsuario}</p>
                                            </div>
                                        </div>

                                    </div>
                                       

                            <div className="linha_pu">

                                <div className="caixa_info_pu">
                                    <label>Email</label>
                                    <div className="box_pu">
                                        <p>{this.state.usuario.email}</p>
                                    </div>
                                </div>

                                <div className="caixa_info_pu">
                                    <label>Departamento</label>
                                    <div className="box_pu">
                                        <p>{this.state.usuario.departamento}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="linha_pu">
                                <div className="botao_cad_usuario">
                                <Link to = {'/editarperfil'} >
                                    <button><i className="far fa-arrow-alt-circle-up"></i> Editar Perfil</button>
                                </Link>
                                </div>
                            </div>

                        </section>
                    </section>


                </main>
                <Rodape />
            </div>
        )
    }
}
export default PerfilUsuario;