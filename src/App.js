import React from 'react'
import UpperHeader from './Components/UpperHeader'
import "./App.css"
import LowerHeader from './Components/LowerHeader'
import Body from './Components/Body'
import Footer from './Components/Footer'

const App = () => {
    return (
        <div>
           <UpperHeader/>
           <LowerHeader/>
           <Body/>
           <Footer/>
        </div>
    )
}

export default App