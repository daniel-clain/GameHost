import { createContext, Dispatch, ReactNode } from "react"

import { HostState } from "../../../game-host-shared/src/types/host"
import { useAppService } from "./useAppService"

export interface SendCallback {
  <Name extends ServerFunctionNames>(
    name: Name,
    args: GetServerFunctionArgs<Name>
  ): void
}

/* type here seems redundant, is there a way to derive it? */
export type ContextProps = {
  localName?: string
  connected: boolean
  setLocalName: Dispatch<string>
  thisClientId: number
  hostState?: HostState
  gameState?: GameState
  send: <T extends ServerFunctionNames>(message: MessagesToServer<T>) => void
}

export const GameHostContext = createContext<ContextProps>({} as ContextProps)

export const GameHostProvider = ({ children }: { children: ReactNode }) => {
  const {
    thisClientId,
    localName,
    setLocalName,
    hostState,
    gameState,
    connected,
    send,
  } = useAppService()

  const contextValue: ContextProps = {
    thisClientId,
    localName,
    setLocalName,
    hostState,
    gameState,
    connected,
    send,
  }

  return (
    <GameHostContext.Provider value={contextValue}>
      {children}
    </GameHostContext.Provider>
  )
}
