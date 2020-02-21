import React from 'react';
import propTypes from 'prop-types'
import styled from 'styled-components'

const ProductList = styled.ul``
const ProductCard = styled.li``

const Card = styled.div``
const Picture = styled.img``
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