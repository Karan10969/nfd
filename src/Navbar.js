import './navbar.css'

import headerLogo from './images/header-logo.png'
import discord from './images/header-discord.svg'
import twitter from './images/header-twitter.svg'

export default function Navbar(){


    return(
        <nav className="navbar">
            <div className="header-logo">
                <img src={headerLogo}></img>
            </div>
           
            <div className="header-links">


                <span>About</span>
                <span>Aggregator</span>


                <span>Features</span>
                <span>Roadmaps</span>
                <span>Contact Us</span>
            </div>
            
            <div className="header-stickers">
                <img src={discord}></img>
                <img src={twitter}></img>
            </div>

        </nav>
    )
}