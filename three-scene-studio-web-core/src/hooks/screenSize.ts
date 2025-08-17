import { useEffect, useState } from 'react'

export const useScreenSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth || 0,
    height: window.innerHeight || 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth || 0,
        height: window.innerHeight || 0,
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}
