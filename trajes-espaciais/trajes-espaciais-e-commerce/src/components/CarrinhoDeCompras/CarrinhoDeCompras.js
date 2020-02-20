import React from 'react'
import styled from 'styled-components'

const BoxContainer = styled.div`
border: 1 px solid grey;
`

class CarrinhoDeCompras extends React.Component {
constructor(props) {
    super(props)
}

    render() {
        return (
            <BoxContainer>
                <img src = {props.iconeDoCarrinho} />
                <h1>Carrinho:</h1>
                <ul>{this.props.AdicionaItemNoCarrinho}
                </ul>
                <p>{this.props.quantidadeDoItem}</p>
                <p>{this.props.removeItens}</p>
                <p>Total: R${this.props.somaDosItens}</p>
            </BoxContainer>
        )
    }
}

export default CarrinhoDeCompras