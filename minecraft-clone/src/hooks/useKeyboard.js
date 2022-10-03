import React, { useState } from 'react'

const useKeyboard = () => {
  const [movement, setMovement] = useState({
    moveForward: false, 
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    texture1: false,
    texture2: false,
    texture3: false,
    texture4: false,
    texture5: false,
  });

  return (
    <div>useKeyboard</div>
  )
}

export default useKeyboard