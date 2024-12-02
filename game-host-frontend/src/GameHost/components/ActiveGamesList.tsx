import { useContext } from "react"
import { GameHostContext } from "../../GameHostProvider/GameHostProvider"

export function ActiveGamesList_C() {
  const { hostState } = useContext(GameHostContext)
  return (
    <div>
      <h3>Acitve Games</h3>
      {hostState?.activeGames.map((game) => (
        <div key={game.gameId}>
          {game.players.map(({ name, id }) => (
            <div key={id}>{name}</div>
          ))}
        </div>
      ))}
    </div>
  )
}
