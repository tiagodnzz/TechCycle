import React, { Component } from 'react';
import CabecalhoUser from '../componentes/CabecalhoUser';
import Rodape from '../componentes/Rodape';
import '../assets/css/alterarusuario.css';
import api, { apiForm } from '../services/api';
import { parseJwt } from '../services/auth';


class EditarPerfilUsuario extends Component {
    constructor() {
        super()
        this.state = {

            usuario : [],
            putUsuario: '',
            updateUsuario:{
                idUser : parseJwt().IdUsuario,
                loginUsuario: '',
                senha: '',
                nome: '',
                email: '',
                departamento: '',
                tipoUsuario: 'Funcionario',
                foto : React.createRef()
            }
        }
    }

    //#region COMPONENTS
    componentDidMount() {
        console.log("Carregado")
        this.getUsuarioId();
    }

    //#region GETS
    getUsuarioId = () => {
        let idUser = this.state.updateUsuario.idUser;
        console.log("idUser: ", idUser);

        api.get("/usuario/" + idUser)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ putUsuario: response.data })
                }
                console.log("respUser: ", this.state.putUsuario)
            })
            .catch(error => {
                console.log("error: ", error)
                window.location.reload();
            })
        }
    
    //#region SET STATES
    putSetStateUsuario = (input) => {
        this.setState({
        updateUsuario: {...this.state.updateUsuario, [input.target.name]: input.target.value}
        }
        )}

    putSetStateImg = (input) => {
        this.setState({
        updateUsuario: {
        ...this.state.updateUsuario, [input.target.name]: input.target.files[0]
        }
        })
    }
    putAltUsuario = (e) => {
    e.preventDefault();
        // let idUser = this.state.updateUsuario.idUser.IdUsuario;
    
        let usuarioForm = new FormData();

        usuarioForm.set('idUser', this.state.updateUsuario.idUser);
        usuarioForm.set('loginUsuario', this.state.updateUsuario.loginUsuario);
        usuarioForm.set('senha', this.state.updateUsuario.senha);
        usuarioForm.set('nome', this.state.updateUsuario.nome);
        usuarioForm.set('email', this.state.updateUsuario.email);
        usuarioForm.set('departamento', this.state.updateUsuario.departamento); 
        usuarioForm.set('foto', this.state.updateUsuario.foto.current.files[0], this.state.updateUsuario.foto.value);



        apiForm.put("/Usuario/"+ this.state.updateUsuario.idUser, usuarioForm)
        .then(response => {
            if (response.status === 200){
                this.setState({updateUsuario : response.data})
            }
        })
        .then(response => {
            if(response.status === 200){
                console.log("updateUsuarioResponde:" , response)
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log("error:", error))
    }



   render() {
        return (
            <div>
                <CabecalhoUser />

                <main className="cadUsuario_main">
                    <h1>Editar Perfil</h1>
                    <hr></hr>

                    <form className="usuario_formulario" onSubmit={this.putAltUsuario.bind(this)}>

                        <section className="coluna_cad_usu_1">

                            <div className="usuario_secao_imagem_cad">
                            {/* <img src={require("../assets/img/camera.svg")} /> */}
                                <img src={"http://localhost:5000/Resources/Usuario/" + this.state.putUsuario.foto} />
                            </div>


                            <div class='input-wrapper'>
                                <label htmlFor='input-file'> <i class="fas fa-upload"></i>     Selecionar um arquivo</label>
                                <input 
                                id='input-file' 
                                type='file'
                                name = "foto"
                                arial-label="coloque sua foto"
                                value = {this.state.foto}
                                onChange = {this.putSetStateImg}
                                ref={this.state.updateUsuario.foto}
                                />
                                
                                <span id='file-name'></span>
                            </div>

                            <p>*Está foto estará disponibilizada para que o administrador posso vizualiza-lá</p>
                        </section>

                        <section className="coluna_cad_usu">

                            <section className="usuario_row">

                                <div>
                                    <label><i className="far fa-address-book"></i>     Edite seu nome</label>
                                    <input
                                        type="text"
                                        onChange={this.putSetStateUsuario}
                                        value={this.state.nome}
                                        className="input_box"
                                        name="nome"
                                        placeholder={this.state.putUsuario.nome}/>
                                </div>
                                
                                <div>
                                    <label><i className="far fa-address-book"></i>     Edite seu login</label>
                                    <input
                                        type="text"
                                        onChange={this.putSetStateUsuario}
                                        value={this.state.loginUsuario}
                                        className="input_box"
                                        name="loginUsuario"
                                        placeholder={this.state.putUsuario.loginUsuario}/>
                                </div>

                            </section>

                            <section className="usuario_row">
                                <div>
                                    <label><i className="fas fa-lock"></i>     Edite sua senha</label>
                                    <input
                                        id="inputs1"
                                        type="password"
                                        value={this.state.senha}
                                        onChange={this.putSetStateUsuario}
                                        className="input_box"
                                        name="senha"
                                        placeholder="Digite sua senha"/>
                                </div>

                                    <div>
                                        <label><i className="fas fa-unlock-alt"></i>     Confirme sua senha</label>
                                        <input
                                            id="inputs2"
                                            type="password"
                                            className="input_box"
                                            name="confirmes"
                                            placeholder="Confirme sua senha">
                                        </input>
                                    </div>
                            </section>


                            <section className="usuario_row">
                                <div>
                                    <label><i className="far fa-address-card"></i>     Edite seu email</label>
                                    <input
                                        type="email"
                                        onChange={this.putSetStateUsuario}
                                        value={this.state.email}
                                        className="input_box"
                                        name="email"
                                        placeholder={this.state.putUsuario.email}/>
                                </div>

                                <div>
                                    <label><i className="far fa-address-book"></i>     Edite seu Departamento</label>
                                    <input
                                        type="text"
                                        value={this.state.departamento}
                                        onChange={this.putSetStateUsuario}
                                        className="input_box"
                                        name="departamento"
                                        placeholder={this.state.putUsuario.departamento}/>
                                </div>
                            </section>

                            <section className="usuario_row_none">
                                <div>
                                    <label><i className="far fa-address-book"></i>Informe seu Tipo Usuário</label>
                                    <input
                                        type="text"
                                        value={this.state.tipoUsuario}
                                        onChange={this.putSetStateUsuario}
                                        className="input_box"
                                        value="funcionario"
                                        name="tipoUsuario"
                                        placeholder="Digite seu tipo de usuário" />
                                </div>
                            </section>

                            <section className="usuario_row">
                                <div className="botao_cad_usuario">
                                    <button type="submit" ><i className="far fa-arrow-alt-circle-up"></i> Solicitar cadastro</button>
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
export default EditarPerfilUsuario;