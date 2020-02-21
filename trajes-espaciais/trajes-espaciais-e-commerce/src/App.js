import React from "react";
import styled from "styled-components";
import Filtro from "./components/Filtro";
import CarrinhoDeCompras from "./components/CarrinhoDeCompras/CarrinhoDeCompras";

const Wrapper = styled.div`
  display: flex;
  justify-content:space-evenly;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valorMinimo: "",
      valorMaximo: "",
      filtroNome: "",
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
          quantidade: 3,
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
    let textoFiltrador = objetosFiltradosNome.map((elemento, index, array) => {
      return (
        <div>
          <p>{elemento.name}</p>
          <img src={elemento.imageUrl} width="100px" height="150px" />
          <p>R$ {elemento.value},00</p>
        </div>
      )
    })
    // FILTROS DO CARRINHO
    let produtoFiltradoCarrinho = this.state.produtos.filter((elemento, index, array) => {
      return (elemento.quantidade >= 1)
    })

    return (
      <Wrapper>
        <Filtro
          filtro={this.onFilterprodutos}
          valorMinimo={this.state.valorMinimo}
          valorMaximo={this.state.valorMaximo}
          filtroNome={this.state.filtroNome}
        />
        {textoFiltrador}
        <CarrinhoDeCompras listaDeProdutos={produtoFiltradoCarrinho} removeOProduto={this.deletaItemCarrinho} />
      </Wrapper>
    );
  }
}

export default App;