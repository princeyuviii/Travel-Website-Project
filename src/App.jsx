import { useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Data from './data.jsx'
import Hero from '../components/Hero'
function App() {
  const [count, setCount] = useState(0)

  const cardMap = Data.map(data =>{
    return <Card key = {data.id} item = {data}/>
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardMap}
      </section>

    </div>
  )
}

export default App
