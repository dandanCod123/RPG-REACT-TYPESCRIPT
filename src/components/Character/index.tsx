import React from "react";
import * as C from './styles';
import {CharacterSides} from '../../types/CharacterSides'

type Props = {
  x:number;
  y:number;
  side:CharacterSides;
}

export const Charcter = ({x,y,side}:Props) => {
    const size = 30;
    const sides = {
        down:0,
        left:-30,
        right:-60,
        up: -90
    }
  return(
    <C.Conteiner 
    size={size}
    left={x * size}
    top={y * size}
    sidePos={sides[side] ?? 0}
    >
        
    </C.Conteiner>
  );
}