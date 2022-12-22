import React, { useEffect } from 'react';
import * as C from './App.styles'
import {Charcter} from './components/Character'
import {useCharacter} from './Hooks/useCharacters'

const App = () => {
  const char = useCharacter();

  ///quando aperta numa tecla no teclado a funçao identifica se a tecla foi apertada
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      //vai fazer com que clicada a tecla A mova para esquerda
      case 'KeyA':
        case 'ArrowLeft':
          char.moveLeft();
          break;
         
           //vai fazer com que clicada a tecla W mova para CIMA
          case 'KeyW':
            case 'ArrowUp':
              char.moveUp();
              break;
            
               //vai fazer com que clicada a tecla D mova para DIREITA
              case 'KeyD':
                case 'ArrowRight':
                  char.moveRight();
                  break;
                  
                   //vai fazer com que clicada a tecla S mova para CIMA
                  case 'KeyS':
                  case 'ArrowDown':
                    char.moveDown();
                  break;
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Charcter x={char.x} y={char.y} side={char.side}/>
      </C.Map>
    </C.Container>
  );
}

export default App;
