import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Person from './Person'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div>
  <Header appName="HR App"/>
<main>
<Person name='Jay' title='Commander' salary='10000' phone='050123456' email='Jay@email.com' animal='Lion King'/>
<Person name='Margit' title='Grand Wizard' salary='top secret' phone='top secret' email='Fox@mail.com' animal='Magic Fox'/>
<Person name='TJ' title='Specialist' salary='4000' phone='040123456' email='TJ@mail.com' animal='Tiger'/>
<Person name='Basu' title='Professor' salary='3000' phone='04123456' email='Basudev@mail.com' animal='Work horse'/>

</main>
<Footer fullName='Jay Wilco'/>
</div>


// made some changes here because github was complaining that there is nothing to merge?

)
}

export default App
