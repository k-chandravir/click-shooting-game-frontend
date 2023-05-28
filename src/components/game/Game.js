import React from 'react'

function Game() {
  return (
    <div>
        <div data-testid="heroHealth">100</div>
        <button>Click To Attack The Villain</button>
        <div data-testid="villainHealth">100</div>
        <button>Click To Attack The Hero</button>
        <button>Turn On Villain's Armour</button>
    </div>
  )
}

export default Game;