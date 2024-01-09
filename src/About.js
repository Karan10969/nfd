import N from './images/n.svg'
import './about.css'


export default function About(){

    return(
        <div className="about-container">
           
            <div className="left-section">
                
                <div className="left-top-section">

                    <div className="problem-solution">
                        <h1>The first web3 crypto platform</h1>
                        <h3> Problem</h3>
                        <p>Today, even in alpha communities, there's an enormous volume of information that members 
                            have to wade through for 6-8+ hours a day. Cutting through the noise of spam is a real problem
                            even where there's something genuinely worth knowing.</p>
                    </div>

                <div className="problem-solution">
                    <h1>We work to make your life easier</h1>
                    <h3> Solution</h3>
                    <p>NFD.gg heralds a new era in alpha communities, one where they have their own platform, which 
                        structures and condenses relevant information on all these alpha activities, where our team 
                        monitors any updates on these activities 24/7. No more reading 2000+ discord messages a day and 
                        tracking twitter day in, day out. Everything you ever need to know can be found on NFD.gg.</p>
                </div>
                
            </div>

            <div className="left-bottom-section">
                <div className="save-money">
                    <img src={N}></img><span>NFD will save you time and help you earn money in crypto.</span>
                </div>
            </div>

        
        </div>

        <div className="right-section">
            <div className="right-section-box">
                <div className="square-container">
                    <div className="squares">NFD</div>
                    <div className="squares">NFD</div>
                    <div className="squares">NFD</div>                
                    <div className="squares">NFD</div>
                    <div className="squares">NFD</div>
                    <div className="squares">NFD</div>
                    <div className="squares">NFD</div>
                    <div className="squares">NFD</div>
                    <div className="squares">NFD</div>
                </div>
            </div>
        </div>

        </div>
    )
}