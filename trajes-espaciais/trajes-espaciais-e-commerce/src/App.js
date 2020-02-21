import React from 'react';
import './App.css';
<<<<<<< HEAD

function App() {
  return (
    <div className="App">
     
      </header>
    </div>
  );
=======
import styled from 'styled-components'

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
    this.state = {  }
  }
  render() { 
    return ( 
      <Main>
        <FilterSection></FilterSection>
        <ProductsSection></ProductsSection>
        <CartSection></CartSection>
      </Main>
     );
  }
>>>>>>> be5c34587a56851d3b8276536c3811a813ffef39
}

export default App;
