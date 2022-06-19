import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'

import './Home.css'

export default function Home() {


  return (
    <>
      
        <Navbar />

        <h1> Tous les articles</h1>

        <div className='navCard'>
            <Card>
                <h1>test</h1>
            </Card>
            <Card>
                <h1>test</h1>
            </Card>
            <Card>
                <h1>test</h1>
            </Card>
            <Card>
                <h1>test</h1>
            </Card>
            <Card>
                <h1>test</h1>
            </Card>
            <Card>
                <h1>test</h1>
            </Card>
        </div>
    </>
  )
}
