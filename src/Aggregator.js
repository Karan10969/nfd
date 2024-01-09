import './aggregator.css'
import ss1 from './images/ss1.png'
import ss2 from './images/ss2.png'
import ss3 from './images/ss3.png'
import scroll1 from './images/scroll1.png'
import scroll2 from './images/scroll2.png'
import horizontal from './images/horizontal.png'
import vertical from './images/vertical.png'

export default function Aggregator(){

    function toFirst(){
        const first = document.getElementById("first-image")
        first.scrollIntoView({
            behavior: 'smooth', block: 'nearest', inline: 'center'
        })

        document.getElementById("first-button").style.backgroundColor = '#6C52EE'
        document.getElementById("first-button").style.border = '1px solid #6C52EE'

        document.getElementById("second-button").style.backgroundColor = 'transparent'
        document.getElementById("third-button").style.backgroundColor = 'none'
    }

    function toSecond(){
        const second = document.getElementById("second-image")
        second.scrollIntoView({
            behavior: 'smooth', block: 'nearest', inline: 'center'
        })

        document.getElementById("first-button").style.backgroundColor = 'transparent'
        document.getElementById("third-button").style.backgroundColor = 'transparent'

        document.getElementById("second-button").style.backgroundColor = '#6C52EE'
        document.getElementById("second-button").style.border = '1px solid #6C52EE'



    }

    function toThrid(){
        const third = document.getElementById("third-image")
        third.scrollIntoView({
            behavior: 'smooth', block: 'nearest', inline: 'center'
        })

        document.getElementById("first-button").style.backgroundColor = 'transparent'
        document.getElementById("second-button").style.backgroundColor = 'transparent'

        document.getElementById("third-button").style.backgroundColor = '#6C52EE'
        document.getElementById("third-button").style.border = '1px solid #6C52EE'

    }

    return(
        <div className="agg-container">

            <div className="first-section">
                
                <div className="first-section-text">
                    <h1>No spam, only</h1>
                    <h1>Alpha</h1>
                    <p>We publish on the NFD.gg platform only that activities that have been selected 
                        and researched by our team.</p>
                </div>

                <div className="first-section-slider">
                    
                        <img src={ss1} id="first-image"></img>
                        <img src={ss2} id="second-image"></img>
                        <img src={ss3} id="third-image"></img>

                </div>

                <div className="first-section-button">
                    <button onClick={toFirst} id="first-button"></button>
                    <button onClick={toSecond} id="second-button"></button>
                    <button onClick={toThrid} id="third-button"></button>
                </div>

            </div>

            <div className="second-section">

                <div className="second-section-left">
                        <img id="horizontal" src={horizontal}></img>
                        <img id="vertical" src={vertical}></img>
                        
                        <div className="second-section-scroll">
                            <img src={scroll1}></img>
                            <img src={scroll2}></img>
                        </div>
                </div>

                <div className="second-section-right">
                    <div className="first">
                        FIRST WEB3 CRYPTO
                    </div>

                    <h1 id="second-section-heading">Keeping track of projects in one place</h1>
                    <p id="second-section-parah">The NFD.gg aggregator allows you to create a specific card of any project and parse any 
                        type of information from Discord, Twitter, Dune Analytics, TradingView, Github etc. 
                        into your own dashboard.
                    </p>

                    <div id="second-section-start" className="download">
                    <span className="download-1">Start Creating</span>
                    <span className="download-2">View Roadmap</span>
                </div>

                </div>

            </div>

            <div className="third-section-right">
                <h1>
                Use all the benefits of NFD
                </h1>

                <h3>
                Unlock the next level of control with customizable real-time feeds, charts, watchlists, and alerts with NFD.gg
                </h3>
            </div>


        </div>
    )
}

 