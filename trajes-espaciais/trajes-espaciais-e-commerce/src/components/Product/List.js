import React from 'react';
import propTypes from 'prop-types'
import styled from 'styled-components'

const ProductList = styled.ul`
display: flex;
flex-wrap: wrap;
flex-direction: row;

`
const ProductCard = styled.li`
list-style: none;
width: 300px;
`

const Card = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr repeat(3, 30px);
margin: 10px;
border: 1px dotted grey;
padding: 5px;
`
const Picture = styled.img`
display: flex;
align-content: center;
justify-content: center;
width: 100%;
max-height: 360px;
`
const Name = styled.span``
const Price = styled.span``
const Button = styled.button``

class List extends React.Component {

  render() {

    const { productList, onAddToCart } = this.props
    const list = productList.map(
      (product) => {
        return (
          <ProductCard key={product.id}>
            <Card>
              <Picture src={product.imageUrl}/>
              <Name>{product.name}</Name>
              <Price>R$ {product.value}</Price>
              <Button onClick={() => onAddToCart(product.id)}>Adicionar ao Carrinho</Button>
            </Card>
          </ProductCard>
        )
      }
    )

    return (
      <ProductList>
        {list}
      </ProductList>
    )

  }
}

List.propTypes = {
  productList: propTypes.array.isRequired,
  onAddToCart: propTypes.func.isRequired
}

export default List