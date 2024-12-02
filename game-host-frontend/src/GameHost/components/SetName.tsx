import { GameHostContext } from "game-host-frontend/src/GameHostProvider/GameHostProvider"
import { useContext, useState } from "react"

export function SetName_C() {
  const { setLocalName } = useContext(GameHostContext)
  const [inputName, setInputName] = useState<string>()
  return (
    <div>
      <input
        placeholder={"set name"}
        onInput={(e: any) => {
          console.log("e", e)
          setInputName(e.target.value)
        }}
        onKeyUp={(e) => {
          if (e.key == "Enter" && inputName) {
            localStorage.setItem("playerName", inputName)
            setLocalName(inputName)
          }
        }}
      />
    </div>
  )
}
