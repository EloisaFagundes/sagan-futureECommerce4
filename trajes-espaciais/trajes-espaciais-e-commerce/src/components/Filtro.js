import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width:20%;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  border: 1px solid;
`
const Titulo = styled.h1`
  width: 80%;
`
const Label = styled.label`
  width:40%;
  margin-bottom:10px;
`
const Input = styled.input`
  width: 40%;
  margin-bottom:10px;
  max-height:20px;
`

function Filtro(props) {

  let onChangeInputNumber = (event) => {
    let novoValor = Number(event.target.value)
    let input = event.target.name
    props.filtro(input, novoValor)
  }

  let onChangeInputString = (event) => {
    props.filtro(event.target.name, event.target.value)
  }

  return (
    <Container>
      <Titulo>Filtros: </Titulo>
      <Label>Valor Mínimo:</Label>
      <Input
        name="valorMinimo"
        type="number"
        min={0}
        value={props.valorMinimo}
        onChange={onChangeInputNumber}
      />
      <Label>Valor Máximo:</Label>
      <Input
        name="valorMaximo"
        type="number"
        min={0}
        value={props.valorMaximo}
        onChange={onChangeInputNumber}
      />
      <Label>Busca por Nome:</Label>
      <Input
        name="filtroNome"
        type="text"
        value={props.filtroNome}
        onChange={onChangeInputString}
      />
    </Container>
  );
}
export default Filtro;