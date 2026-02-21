import { useState } from 'react'
import './App.css'
import AppContext from './AppContext'
import Results from './components/Results/Results'
import Details from './components/Details/Details'
import Header from './components/Header/Header'

function App() {
  //minimum states needed:
  //raw input text
  const [inputText, setInputText] = useState('')
  const inputObj = { inputText, setInputText }
  //debounced search text
  //loading boolean
  //error message/null
  //results data, start with one selected pokemon
  //selected pokemon data
  return (
    <>
      <AppContext.Provider value={inputObj}>
        <Header />
        <Results />
        <Details />
      </AppContext.Provider>
    </>
  )
}

export default App
