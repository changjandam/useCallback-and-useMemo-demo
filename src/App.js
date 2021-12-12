import React, { useState, useCallback } from 'react';
import Text from './components/Text';
import Button from './components/Button';
import Center from './UI/Center';
import MemoDemo from './components/MemoDemo';

import style from './App.module.css'

function App() {
  const [demoText, setDemoText] = useState(true);

  const secondBtnClickHandler = useCallback(() => {
    setDemoText((preState) => !preState);
  }, []);

  return (
    <React.Fragment>
      <Center>
        <Text text={demoText ? 'true' : 'false'} />
        <Button
          text={'change Boolean'}
          onClickHandler={secondBtnClickHandler}
        />
      </Center>
      <Center>
        <MemoDemo numbers={[1, 2, 3, 4, 5]} />
      </Center>
    </React.Fragment>
  );
}

export default App;
