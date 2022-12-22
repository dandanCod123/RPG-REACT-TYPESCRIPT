import styled from "styled-components";

export const Conteiner = styled.div<{size:number ,left: number, top: number, sidePos:number}>`
width: ${props => props.size}px;
height: ${props => props.size}px;
position: absolute;
left: ${props => props.left}px;
top: ${props => props.top}px;
background-image: url('/Assets/char.png');
background-position: 0px ${props => props.sidePos}px;

`;