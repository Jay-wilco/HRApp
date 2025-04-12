import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import PersonList from './PersonList'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div>
  <Header appName="HR App"/>
<main>
<PersonList/>
</main>
<Footer fullName='Jay Wilco'/>
</div>




)
}

export default App
