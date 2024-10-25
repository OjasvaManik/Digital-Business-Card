// eslint-disable-next-line no-unused-vars
import React from "react"
import './App.css'
import Intro from "./components/Intro"
import Email from "./components/Email"
import Footer from "./components/Footer"
import About from "./components/About"

function App() {
    return (
        <div className="app">
            <div className="app--container">
                <div className="app--profile">
                    <div className="app--profile__picture">

                    </div>
                    <div className="app--profile__section">
                        <div className="app--profile__intro">
                            <Intro/>
                        </div>
                        <div className="app--profile__email">
                            <Email/>
                        </div>
                        <div className="app--profile__about">
                            <About/>
                        </div>
                    </div>

                    <div className="app--profile__footer">
                    <Footer/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default App
