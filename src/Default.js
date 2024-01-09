import './default.css'
import squirrel from './images/squirrel.png'
import svg1 from './images/svg1.svg'
import svg2 from './images/svg2.svg'
import svg3 from './images/svg3.svg'
import apple from './images/apple.svg'
import windows from './images/windows.svg'
import clap from './images/clap.svg'

export default function Default(){
    
    return(
        <div className="default-container">

            <div className="default-container-left">
                
                <div className="left-conatiner-intro">
                    <img src={squirrel}></img>
                    <h1>NFD platform</h1>
                    <h2>"NFD.gg"</h2>
                    <h4>An alpha community 2.0 with it's own platform for participating, searching, and 
                        tracking any crypto related information.</h4>
                </div>

                <div className="left-conatiner-functionality">
                    
                    <div className="small-divs">
                        <img src={svg1}></img>
                        <span>Info in one place</span>
                    </div>
                    <div className="small-divs">
                        <img src={svg2}></img>
                        <span>Private tools</span>
                    </div>
                    <div className="small-divs">
                        <img src={svg3}></img>
                        <span>Wide functionalities</span>
                    </div>

                    <div className="big-divs-1" id="hover">
                        <h5><a href="https://app.nfd.gg/login" target="_blank">Try Platform </a></h5>
                    </div>
                    <div className="big-divs-2">
                        <h5>How it works?</h5>
                    </div>

                </div>
                <div className="bottom-circle"></div>

                
            </div>

            <div className="default-container-right">
                <div className="top-circle"></div>
                
                <div className="software-by-nfd">
                    <img src={clap}></img><span>Software by NFD</span>
                </div>

                <h1 className="black-white-gradient">NFD Software</h1>
                <h1 className="color-gradient">"Combine"</h1>

                <h4>Handle your crypto-wallets, farm activities and retrodrops on a single app.</h4>

                <div className="windows-mac">
                    
                    <div className="mac-win">
                        <img src={apple}></img><span>macOS</span>
                    </div>

                    <div className="mac-win">
                        <img src={windows}></img><span>Windows</span>
                    </div>     
                    
                </div>

                <div className="download">
                    <span className="download-1">Download</span>
                    <span className="download-2"><u><a href="https://docs.nfd.gg/main/eng-combine-software/what-is-combine" target="_blank">How it Works?</a></u></span>
                </div>

            </div>

        </div>
    )
}