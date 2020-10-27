import React, {Component} from 'react';
import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';
import '../assets/css/listausuario.css';

class ListaUsuario extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lista: [],
            loginUsuario: '',
            senha: '',
            nome: '',
            email: '',
            foto: '',
            departamento: '',
            tipoUsuario: ''
        }
        this.buscarUsuario = this.buscarUsuario.bind(this)
        this.deletarUsuario = this.deletarUsuario.bind(this)
    }


    buscarUsuario(){
        fetch("http://localhost:5000/api/usuario")
        .then(response => response.json())
        .then(data => {
            this.setState({lista:data})
        })
        .catch((error) => console.log(error))
    }
    componentDidMount(){
        this.buscarUsuario();
    }

    deletarUsuario = (idUsuario) => {
        console.log("Excluído")

        fetch("http://localhost:5000/api/usuario/"+idUsuario,
        {
            method : "DELETE",
            headers : {
                "Content-type" : "application/json"
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            this.buscaUsuario();
            this.setState(()=>({lista : this.state.lista}))
        })
        .catch(error => console.log(error))
        .then(this.buscarUsuario)
    }






    render(){
        return(
            <div>
                <CabecalhoAdm/>

                <main>

                    <section className="titulo_usuario">
                        <h1>Lista de Usuario</h1>
                        <hr></hr>
                    </section>

                    <section className="tabela-de-usuarios">
                        <table id="tabela-lista">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Login</th>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Foto</th>
                                    <th>Departamento</th>
                                    <th>Tipo Usuario</th>
                                    <th>ação</th>
                                </tr>
                            </thead>

                            <tbody id="tabela-lista-corpo">
                            {
                                this.state.lista.map(function(usuario){

                                    return (
                                        <tr key = {usuario.idUsuario}>
                                            <td>{usuario.idUsuario}</td>
                                            <td>{usuario.loginUsuario}</td>
                                            <td>{usuario.nome}</td>
                                            <td>{usuario.email}</td>
                                            <td className = "ltdimg"><img src={"http://localhost:5000/Resources/Usuario/" + usuario.foto}/></td>
                                            <td>{usuario.departamento}</td>
                                            <td>{usuario.tipoUsuario}</td>
                                            <td><button onClick={i => this.deletarUsuario(usuario.idUsuario)}>Excluir</button></td>
                                        </tr>
                                    );
                                }.bind(this))
                            }                                    
                            </tbody>
                        </table>
                    </section>


                </main>

                <Rodape/>
            </div>
        )
    }

}
export default ListaUsuario;