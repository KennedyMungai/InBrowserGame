import React, { useState, useEffect } from 'react'

const useKeyboard = () => {
  const [actions, setActions] = useState({
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

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return() => {
      document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    }
  }, []);
  

  return (
    <div>useKeyboard</div>
  )
}

export default useKeyboard