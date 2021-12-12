import react, { useState } from 'react';

import style from './App.module.css';

function App() {
  const [firstDemoText, setFirstDemoText] = useState(false);
  const [secondDemoText, setSecondDemoText] = useState(true);

  const firstBtnClickHandler = () => {
    setFirstDemoText((preState) => !preState);
  };

  const secondBtnClickHandler = () => {
    if (firstDemoText) {
      setSecondDemoText((preState) => !preState);
    }
  };

  return (
    <div className={style.main}>
      <button className={style.btn} onClick={firstBtnClickHandler}>
        {firstDemoText ? 'on' : 'off'}
      </button>
      <button className={style.btn} onClick={secondBtnClickHandler}>
        {secondDemoText ? 'true' : 'false'}
      </button>
    </div>
  );
}

export default App;
