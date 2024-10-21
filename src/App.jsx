import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CommonContext from './components/CommonContext';
import Main from './components/Main';
import UpdateButton from './components/UpdateButton';
import ChildTwo from './components/ChildTwo';

function App() {
  let [color,setColor]=useState('red');
  function updateColor(){
    setColor('green');
  }

  return (
    <>
      <CommonContext.Provider value={{color,updateColor}}>
      <h1>Example of Context API</h1>
      <Main/>
      <UpdateButton/>
      <ChildTwo/>
      </CommonContext.Provider>
    </>
  )
}

export default App
