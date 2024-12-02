import { useContext, useState } from "react"
import { ActiveGamesList_C } from "./components/ActiveGamesList"
import { ConnectedClientsList } from "./components/ConnectedClientsList"
import { GameLobbyList_C } from "./components/GameLobbyList"
import { GameHostContext } from "../GameHostProvider/GameHostProvider"

export function GameHost_C() {
  const { localName, send, gameState } = useContext(GameHostContext)


  if (localName) {
    return (
      <div>
        <ConnectedClientsList />
        <GameLobbyList_C />
        <ActiveGamesList_C />
        <button
          onClick={() => {
            send({ name: "createGameLobby" })
          }}
        >
          Create Lobby
        </button>
      </div>
    )
  } else {
    
}
