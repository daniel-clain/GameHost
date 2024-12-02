import React from "react"
import ReactDOM from "react-dom/client"
import { GameHost_C } from "./GameHost/GameHost"
import { GameHostProvider } from "./GameHostProvider/GameHostProvider"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <GameHostProvider>
      <GameHost_C />
    </GameHostProvider>
  </React.StrictMode>
)
