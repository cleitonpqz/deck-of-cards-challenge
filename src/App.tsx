import React from 'react'
import { Header } from './components/Header'
import { Main } from './pages/Main'

import GlobalStyles from './style'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Main />
    </div>
  )
}

export default App
