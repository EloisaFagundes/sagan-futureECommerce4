import React from 'react';
import propTypes from 'prop-types'
import styled from 'styled-components'
import Header from './Header'
import List from './List'

const BoxContainer = styled.div`
display: grid;
grid-column: repeat(100px);
grid-row: repeat (100px);
`

export const sortType = {
  asc: 'asc',
  desc: 'desc',
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sort: sortType.asc,
    }
  }

  sortedProducts = () => {
    const { sort } = this.state
    const { productList } = this.props
    return productList.sort((a, b) => sort === sortType.asc ? a.value - b.value : b.value - a.value)
  }

  onChangeSort = (newSort) => {
    this.setState({ sort: newSort })
  }

  render() {

    const { productList, onAddToCart } = this.props
    const quantity = productList.length
    
    return (
      <BoxContainer>
        <Header 
          sortType={sortType}
          productCount={quantity}
          onChangeSort={this.onChangeSort} 
        />
        <List 
          productList={this.sortedProducts()} 
          onAddToCart={onAddToCart} 
        />
      </BoxContainer>
    )

  }
}

Home.propTypes = {
  productList: propTypes.array.isRequired,
  onAddToCart: propTypes.func.isRequired
}

export default Home