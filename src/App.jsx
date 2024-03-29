import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header, Menu} from './components'
import Inventory from "./pages/Inventory.jsx";

function App() {
  return (
    <main >
        {/*className='relative'*/}
        <Header></Header>
        {/*<Menu></Menu>*/}
        <Inventory/>
    </main>
    )
}

export default App
