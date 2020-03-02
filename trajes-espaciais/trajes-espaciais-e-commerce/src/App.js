import React from "react";
import styled from "styled-components";
import Filtro from "./components/Filtro";
import CarrinhoDeCompras from "./components/CarrinhoDeCompras/CarrinhoDeCompras";
import BotaoCarrinho from "./icones/icone-carrinho.png"
import ProductHome from './components/Product/Home'

const Main = styled.main`
  display: grid;
  grid-template-areas: 
    "filter products products products cart";
  > section {
    border: 1px solid black;
  }
`
const FilterSection = styled.section`
  grid-area: filter;
  width: 250px;
`
const ProductsSection = styled.section`
  grid-area: products;
`
const CartSection = styled.section`
  grid-area: cart;
  max-width: 250px;
  display: ${props => props.mostraCarrinho ? "block" : "none"};
`
const Wrapper = styled.div`
  display: flex;
  justify-content:space-evenly;
`

const CartButton = styled.button`
display:grid;
align-items: center;
justify-content:center;
padding-left: 15px;
position: fixed;
bottom: 10px;
right: 10px;
border: 1px solid black;
width:80px;
height:80px;
border-radius:50%;
`
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valorMinimo: "",
      valorMaximo: "",
      filtroNome: "",
      mostraCarrinho: false,
      produtos: [
        {
          id: 1,
          name: "Traje Perdidos no Espaço 2018",
          value: 1000.0,
          quantidade: 0,
          imageUrl: require('./imagens/traje1.png')
        },
        {
          id: 2,
          name: "Traje Insterestelar",
          value: 10000.0,
          quantidade: 0,
          imageUrl: require('./imagens/traje3.png')
        },
        {
          id: 3,
          name: "Traje Perdido em Marte",
          value: 5000.0,
          quantidade: 0,
          imageUrl: require('./imagens/traje4.png')
        },
        {
          id: 4,
          name: "Traje Futurista",
          value: 20000.0,
          quantidade: 0,
          imageUrl: require('./imagens/traje2.png')
        },
        {
          id: 5,
          name: "Traje Fantasia Carnaval",
          value: 100.0,
          quantidade: 0,
          imageUrl: require('./imagens/traje5.png')
        }
      ]
    };
  }

  onFilterprodutos = (filtro, valor) => {
    this.setState({
      [filtro]: valor
    })
  }
  onMostraCarrinho = () => {
    this.setState({
      mostraCarrinho: !this.state.mostraCarrinho
    })
  }

  componentDidUpdate(){
    localStorage.setItem('carrinho', JSON.stringify(this.state.produtos))
  }

  componentDidMount(){

    const estadoRecuperado = JSON.parse(localStorage.getItem('carrinho'))
    if (estadoRecuperado){
      this.setState({produtos:estadoRecuperado})
    }
  }
  
  deletaItemCarrinho = (produtoId) => {
    let copiaProdutos = this.state.produtos.map((elemento, index, array) => {
      if (elemento.id === produtoId) {
        return ({
          ...elemento,
          quantidade: 0,
        })
      } else {
        return (elemento)
      }
    })
    this.setState({
      produtos: copiaProdutos
    })
  }
  adicionaItemCarrinho = (produtoId) => {
    let copiaProdutos = this.state.produtos.map((elemento, index, array) => {
      if (elemento.id === produtoId) {
        return ({
          ...elemento,
          quantidade: elemento.quantidade + 1,
        })
      } else {
        return (elemento)
      }
    })
    this.setState({
      produtos: copiaProdutos
    })
  }

  render() {
    // FILTROS VALOR MÍNIMO E VALOR MÁXIMO
    let objetosFiltradosMinimo = this.state.produtos.filter((elemento, index, array) => {
      return ((Number(this.state.valorMinimo)) ? (elemento.value >= Number(this.state.valorMinimo)) : true)
    })
    let objetosFiltradosMaximo = objetosFiltradosMinimo.filter((elemento, index, array) => {
      return ((Number(this.state.valorMaximo)) ? (elemento.value <= Number(this.state.valorMaximo)) : true)
    })
    let objetosFiltradosNome = objetosFiltradosMaximo.filter((elemento, index, array) => {
      return ((this.state.filtroNome) ? (elemento.name.toLowerCase().indexOf(this.state.filtroNome.toLowerCase()) != -1) : true)
    })

    // FILTROS DO CARRINHO
    let produtoFiltradoCarrinho = this.state.produtos.filter((elemento, index, array) => {
      return (elemento.quantidade >= 1)
    })



    let textoFiltrador = objetosFiltradosNome
    return (
      <Main>
        <FilterSection>
          <Filtro
            filtro={this.onFilterprodutos}
            valorMinimo={this.state.valorMinimo}
            valorMaximo={this.state.valorMaximo}
            filtroNome={this.state.filtroNome}
          />
        </FilterSection>
        <ProductsSection>
          <ProductHome productList={textoFiltrador} onAddToCart={this.adicionaItemCarrinho} />
        </ProductsSection>
        <CartSection mostraCarrinho={this.state.mostraCarrinho}>
          <CarrinhoDeCompras listaDeProdutos={produtoFiltradoCarrinho} removeOProduto={this.deletaItemCarrinho} />
        </CartSection>
        <CartButton onClick={this.onMostraCarrinho}>
          <img src={BotaoCarrinho} width="80%" />
        </CartButton>
      </Main>

    );
  }
}

export default App;