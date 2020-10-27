import React, {Component} from 'react';
// import '../assets/css/padrao.css'
import '../assets/css/login.css'
import Axios from 'axios';
import{parseJwt} from '../services/auth';
import {Link} from 'react-router-dom';


class Login extends Component 
{
  constructor(props){
    super(props);
    this.state = {
      loginUsuario: '',
      senha: '',
      loading: false,
      msgErro: ''
    }
  }
  efetuarLogin(event)
  {
    event.preventDefault();
    this.setState({loading : true});
    this.setState({msgErro:''});

    Axios.post('http://localhost:5000/api/login',
    {
      loginUsuario : this.state.loginUsuario,
      senha : this.state.senha
    })
    .then(data => 
    {
      if(data.status === 200)
      {
        localStorage.setItem('usiario-tech', data.data.token)
        console.log('Meu token é: ' + data.data.token)
        this.setState({loading : false})

        console.log(parseJwt().Role)

        if(parseJwt().Role === 'Administrador'){
          this.props.history.push('/paineladm')
        }else{
          this.props.history.push('/home')
        }
      }
    })
    .catch(erro =>{
      this.setState({loading : false})
      this.setState({msgErro : 'Usuário ou senha inválidos'})
    });
  }

  atualizaLogin(event)
  {
    this.setState({[event.target.name] : event.target.value})
  }

  render(){
    return(
      <div className="body_login">
          <header className="header_login">
            <a href="home.html"><img src={require("../assets/img/Logo.svg")} alt="Logotipo"/></a> 
          </header>
        <main className="main_login">
            <section className="area_login">
              <div className="titulo_entrar">
                <h1>Entrar</h1>
              </div>
                <form onSubmit = {this.efetuarLogin.bind(this)}>
                   <label for="nome">Nome:</label>
                   <i className="fas fa-user-friends"></i>
                   <input 
                      value = {this.state.loginUsuario}
                      onChange = {this.atualizaLogin.bind(this)}
                      className="linha_usuario" 
                      type="text" 
                      name="loginUsuario" 
                      placeholder="Digite seu nome de usuário"/>
                   <label for="senha">Senha:</label>
                   <i className="fas fa-lock"></i>
                   <input 
                      value = {this.state.senha}
                      onChange = {this.atualizaLogin.bind(this)}
                      type="password" 
                      name="senha" 
                      placeholder="Digite sua senha"/>
                    <div className="texto_login">
                    <a href="#">Esqueceu a senha?</a>
                    <p style={{color : 'red'}}>{this.state.msgErro}</p><br/>
                    </div>  
                    <div class="botao_login">
                      {
                        this.state.loading === true &&
                        <button type="submit" disabled className="entrar_login botao">
                          Carregando...
                        </button>
                      }
                      {
                        this.state.loading === false &&
                        <button type="submit" className="entrar_login botao">
                          Entrar
                        </button>
                      }
                      
                    <button className="cadastrar_login botao"><Link to={'/cadastrousuario'}>Cadastrar</Link></button>
                    
                    </div>
                </form>
            </section>
        </main>
        <footer id="footer_login">
          <p> &copy; Todos os direitos reservados | FunCode 2019 </p>
        </footer>
        <script src="https://kit.fontawesome.com/e6d6edbc99.js"></script>
      </div>
    )
  }
}

export default Login;
