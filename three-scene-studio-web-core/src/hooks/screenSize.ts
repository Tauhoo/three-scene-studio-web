import { useEffect, useState } from 'react'

function getWindow() {
  return typeof window !== 'undefined' ? window : null
}

export const useScreenSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: getWindow()?.innerWidth || 0,
    height: getWindow()?.innerHeight || 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: getWindow()?.innerWidth || 0,
        height: getWindow()?.innerHeight || 0,
      })
    }
    getWindow()?.addEventListener('resize', handleResize)
    return () => getWindow()?.removeEventListener('resize', handleResize)
  }, [])

  return size
}
