import type {ReactElement} from 'react';

import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import Game from './Game';

type Props = Readonly<{
  game: Game,
}>

function Board({game}: Props): ReactElement {
  return (
    <div><span>This is the game board</span></div>
  )
}

export default Board;