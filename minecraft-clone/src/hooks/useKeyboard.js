import React, { useState, useEffect, useCallback } from 'react';


function actionByKey(key) {
  const keyActionMap = {
    KeyW: 'moveForward',
    KeyS: 'moveBack',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump'
  }
};

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

  const handleKeyDown = useCallback((e) => {

  }, []);

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