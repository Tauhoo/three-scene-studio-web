import React, { createContext, useContext, useState } from 'react'
import { ThreeSceneStudioManager } from 'three-scene-studio-core'

type ThreeSceneStudioContextType = {
  loading: boolean
  manager: ThreeSceneStudioManager
}

const ThreeSceneStudioContext =
  createContext<ThreeSceneStudioContextType | null>(null)

type Props = {
  url: string
}

export const ThreeSceneStudioProvider: React.FC<
  React.PropsWithChildren<Props>
> = ({ children, url }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [manager] = useState<ThreeSceneStudioManager>(() => {
    const newManager = new ThreeSceneStudioManager()
    newManager.loadWorkFromURL(url).then(() => {
      setLoading(false)
      newManager.clock.start()
    })
    return newManager
  })

  return (
    <ThreeSceneStudioContext.Provider value={{ loading, manager }}>
      {children}
    </ThreeSceneStudioContext.Provider>
  )
}

export const useThreeSceneStudio = () => {
  const context = useContext(ThreeSceneStudioContext)
  if (!context) {
    throw new Error(
      'useThreeSceneStudio must be used within a ThreeSceneStudioProvider'
    )
  }
  return context
}
