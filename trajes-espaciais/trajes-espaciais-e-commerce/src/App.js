import React from "react";
import styled from "styled-components";
import Filtro from "./components/Filtro";

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
          imageUrl: require('./imagens/traje1.jpg')
        },
        {
          id: 2,
          name: "Traje Insterestelar",
          value: 10000.0,
          imageUrl: require('./imagens/traje3.jpg')
        },
        {
          id: 3,
          name: "Traje Perdido em Marte",
          value: 5000.0,
          imageUrl: require('./imagens/traje4.jpg')
        },
        {
          id: 4,
          name: "Traje Futurista",
          value: 20000.0,
          imageUrl: require('./imagens/traje2.jpg')
        },
        {
          id: 5,
          name: "Traje Fantasia Carnaval",
          value: 100.0,
          imageUrl: require('./imagens/traje5.jpg')
        }
      ]
    };
  }

  onFilterprodutos = (filtro, valor) => {
    this.setState({
      [filtro]: valor
    })
  }

  render() {


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

    return (
      <Wrapper>
        <Filtro
          filtro={this.onFilterprodutos}
          valorMinimo={this.state.valorMinimo}
          valorMaximo={this.state.valorMaximo}
          filtroNome={this.state.filtroNome}
        />

        {textoFiltrador}

      </Wrapper>
    );
  }
}
export default App;
