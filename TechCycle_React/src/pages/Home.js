import React, {Component} from 'react';
import CabecalhoUser from '../componentes/CabecalhoUser';
import Rodape from '../componentes/Rodape';
import '../assets/css/home.css';
import Moment from 'react-moment';
import {Link} from 'react-router-dom'
// import moment = require('moment');

// import { parseJwt } from '../services/auth';

class Home extends Component{
    constructor(props){
      super(props);
      this.state = {
        // idUser : parseJwt().IdUsuario,
        listaAnuncios : [],
        listaComFiltro : [],
        idAnuncio : '',
        idProduto : {
          nomeProduto : '',
          descricao : ''
        },
        preco : '',
        dataExpiracao : '',
      }
      this.buscarAnuncio = this.buscarAnuncio.bind(this)
      this.removerFiltro = this.removerFiltro.bind(this)
      this.toggleFiltro = this.toggleFiltro.bind(this)
    }

    toggleFiltro(event){
      if(event.target.checked){
        if(event.target.name == 'marca'){
          return this.filtroDeMarca(event.target.value)
        }else if(event.target.name == "processador"){
          return this.filtroDeProcessador(event.target.value)
        }
      }
        this.removerFiltro()
    }

    removerFiltro(){
      this.setState({listaComFiltro : this.state.listaAnuncios})
    }

    filtroDeMarca(valor){
      var lista = this.state.listaAnuncios

      var listaFiltrada = lista.filter((undefined, index, lista) => {
        if(lista[index].idProdutoNavigation.idMarcaNavigation.idMarca == valor){
           return lista[index]
        }
      })

      this.setState({
        listaComFiltro : listaFiltrada
      })
    }

    filtroDeProcessador(valor){
      var lista = this.state.listaAnuncios

      var listaFiltrada= lista.filter((undefined, index, lista) => {
        if(lista[index].idProdutoNavigation.processador == valor){
           return lista[index]
        }
      })

      this.setState({
        listaComFiltro : listaFiltrada
      })
    }

    buscarAnuncio(){
      fetch('http://localhost:5000/api/anuncio')
      .then(response => response.json())
      .then(data =>{
        this.setState({ listaAnuncios : data, listaComFiltro : data})
      }).catch((erro) => console.log(erro))
    }

    cadastrarInteresse(){
      let interesse = {
          idUsuario : parseInt(this.state.idUsuario),
          idAnuncio : this.state.idAnuncio,
          aprovado : 'agd'
      }

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

    passarAnuncio(event){
      localStorage.setItem('idAnuncio', event.target.anuncio.idAnuncio)
    }

    redirec(){
      this.context.router.push({
        pathname: '/descricao',
        state: {idAnuncio: this.state.idAnuncio}  
      })
    }

    componentDidMount(){
      this.buscarAnuncio()
    }

  render(){
    return (
      <div className="App">
        <CabecalhoUser/>
          <main className="home_main">
          <h1>Vitrine de Anúncios</h1>
          <hr/>
          <div className="home_secao-filtro">
              <div className="home_filtros">
                <form>
                </form>
              </div>
          </div>
          <section className="home_linhaCard">
            {
              this.state.listaComFiltro ?
              this.state.listaComFiltro.map(function(anuncio){
                return(
                    <div className="home_card" key={anuncio.idAnuncio} value={anuncio.idAnuncio}>
                      <div className="home_img">
                          <img src={"http://localhost:5000/Resources/Anuncio/" + anuncio.foto} alt="Macbook"/>
                      </div>
                      <div className="home_linha">
                          <div>
                              <h3 className="home_nomeProduto">{anuncio.idProdutoNavigation.nomeProduto}</h3>
                          </div>
                          <div>
                              <h3 className="home_preco">R${anuncio.preco}</h3>
                          </div>
                      </div>
                      <div className="home_texto">
                          <p>{anuncio.idProdutoNavigation.descricao}</p>
                              <p className="dataExpiracao_home">Data de expiração:<Moment format="DD/MM/YYYY">{anuncio.dataExpiracao}</Moment></p>
                      </div>
                      <div className="home_linha">
                          <button className="home_btn"><Link to={{
                                                                pathname: '/descricao',
                                                                state: {idAnuncio: anuncio.idAnuncio  }
                                                                }}>Detalhes</Link></button>
                          <div className="home_coracao"><i className="far fa-heart" onClick={e => {this.cadastrarInteresse()}}></i></div>
                      </div>
                  </div>          
                )
              }, this) : null
            }
          </section>
      </main>
        <Rodape/>
    </div>
  );
}

}
export default Home;