import React from 'react'
import styled from 'styled-components'

const BoxContainer = styled.div`
width:200px;
height:100%;
margin: 10px;
`
const DeletaItem = styled.p`
:hover{color:red; cursor: pointer;}
`
const AlinhaTexto = styled.div `
display: flex;
justify-content:space-between;
font-size: 0.8rem;
width:100%;
padding:5px;
box-sizing:border-box;
 p { 
  margin: 5px;
  text-align:left;
  justify-self: left
}
`

const CartText = styled.p`
width: 60%;` 


function CarrinhoDeCompras(props) {
  let valor = 0
  const produtoInseridoNoCarrinho =
    props.listaDeProdutos.map((cadaProduto, index) => {
      valor = valor + (cadaProduto.value*cadaProduto.quantidade)
      return (<AlinhaTexto>
        <p>{cadaProduto.quantidade}X</p>
        <CartText>
          {cadaProduto.name}
        </CartText>
        <DeletaItem onClick={() => props.removeOProduto(cadaProduto.id)} > X </DeletaItem>
      </AlinhaTexto>)
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



