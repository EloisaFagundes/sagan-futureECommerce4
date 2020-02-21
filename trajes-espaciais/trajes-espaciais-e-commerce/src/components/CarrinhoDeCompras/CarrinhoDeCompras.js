import React from 'react'
import styled from 'styled-components'

const BoxContainer = styled.div`
border: 1px solid grey;
width: 300px;
height:100%;
`
const ItemDaLista = styled.p `
border-bottom: 1px black dotted;
list-style-type: none;
`

class CarrinhoDeCompras extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            produtoAdicionado:"",
            listaDeProdutos: [
             
            ]
        }
    }


   lidaComMudança = (event) => {
   this.setState ({produtoAdicionado: event.target.value})
   }

   adicionaProdutoNoCarrinho = () => {
     const maisUmProduto =  {
      id: 1,
      name: "Traje Perdidos no Espaço 2018",
      value: 1000.0,
      imageUrl: "https://picsum.photos/200/200"
    }
    this.setState({
      listaDeProdutos: [...this.state.listaDeProdutos, maisUmProduto],
      produtoAdicionado: ""
    })
   }


    render() {
      const inserirNovoProdutoNaLista = 
      this.state.listaDeProdutos.map((cadaProduto, index) => {
      return(<li key={index} onClick= {cadaProduto.name}>{cadaProduto.texto}</li>)
      })
        return (
            <BoxContainer>
                {/* <img src = {props.iconeDoCarrinho} /> */}
                <h1>Carrinho:</h1>
                <div>
                <p>{this.props.quantidadeDoItem}0X</p>
                <ItemDaLista>
                {this.inserirNovoProdutoNaLista}
                </ItemDaLista>
                <p>{this.props.removeItens}</p>
                <button onClick={this.state.removeOProduto}> Excluir produto </button>
                </div>
                <p>Total: R${this.props.somaDosItens}</p>
            </BoxContainer>
        )
    }
}

export default CarrinhoDeCompras

// botão
// onClick={props.funcao(parâmetro)}
// onClick={()=>props.funcao(parâmetro)}
{/* <div> */}
//    <p>elemento.nome</p>
//    <button> Deletar </button>
// </div>
// this.state.arrayDeProdutos.map

