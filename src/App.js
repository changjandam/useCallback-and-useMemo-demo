import React, { useState, useCallback } from 'react';
import Child from './components/Child';
import Button from './components/Button';

import style from './App.module.css';

function App() {
  const [demoText, setDemoText] = useState(true);


  const secondBtnClickHandler = useCallback(() => {
      setDemoText((preState) => !preState);
  },[]);

  return (
    <div className={style.main}>
      <Child text={demoText ? 'true' : 'false'} />
      <Button text={'change text'} onClickHandler={secondBtnClickHandler} />
    </div>
  );
}

export default App;
