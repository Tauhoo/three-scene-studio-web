import { useEffect, useState } from 'react'

function getVisibleHeight() {
  return window.visualViewport?.height ?? window.innerHeight ?? 0
}

function getVisibleWidth() {
  return window.visualViewport?.width ?? window.innerWidth ?? 0
}

export const useScreenSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: getVisibleWidth(),
    height: getVisibleHeight(),
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: getVisibleWidth(),
        height: getVisibleHeight(),
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}
