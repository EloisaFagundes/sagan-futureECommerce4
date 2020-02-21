import React from 'react'
import styled from 'styled-components'

const BoxContainer = styled.div`
border: 1px solid grey;
width: 300px;
height:100%;
`


function CarrinhoDeCompras(props) {
  let valor = 0
  const produtoInseridoNoCarrinho =
    props.listaDeProdutos.map((cadaProduto, index) => {
      valor = valor + (cadaProduto.value*cadaProduto.quantidade)
      return (<div>
        <p>{cadaProduto.quantidade}X</p>
        <p>
          {cadaProduto.name}
        </p>
        <p onClick={() => props.removeOProduto(cadaProduto.id)} > X </p>
      </div>)
    })
  return (
    <BoxContainer>
      <h1>Carrinho:</h1>
      {produtoInseridoNoCarrinho}
      <p>Total: R${valor}</p>
    </BoxContainer>
  )
}


export default CarrinhoDeCompras



