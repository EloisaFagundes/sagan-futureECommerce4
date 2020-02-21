import React from 'react';
import './App.css';
import styled from 'styled-components'

import ProductHome from './components/Product/Home'

const Main = styled.main`
  display: grid;
  grid-template-areas: 
    "filter products products products cart";
  height: 90vh;
  width: 90vw;
  > section {
    border: 1px solid black;
  }
`
const FilterSection = styled.section`
  grid-area: filter;
`
const ProductsSection = styled.section`
  grid-area: products;
`
const CartSection = styled.section`
  grid-area: cart;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      productList: [
        {
          id: 1,
          name: "Foguete da Missão Apollo 11",
          value: 10000.0,
          imageUrl: "./imagens/traje1.jpg",
        },
        {
          id: 2,
          name: "Foguete da Missão Apollo 22",
          value: 20000.0,
          imageUrl: "https://picsum.photos/200/200",
        },
        {
          id: 3,
          name: "Foguete da Missão Apollo 33",
          value: 30000.0,
          imageUrl: "https://picsum.photos/200/200",
        },
      ]
     }
  }
  render() { 
    return ( 
      <Main>
        <FilterSection></FilterSection>
        <ProductsSection>
          <ProductHome productList={this.state.productList} onAddToCart={(item)=>{console.log(item)}}/>
        </ProductsSection>
        <CartSection></CartSection>
      </Main>
     );
  }
}

export default App;
