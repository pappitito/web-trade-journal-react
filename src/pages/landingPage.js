import React from 'react'
import {useNavigate} from 'react-router-dom'
import './bodyfirst.css'
import './bodysecond.css'
import './bodythird.css'
import './general.css'
import './header.css'

function Landing(){
    const navigate = useNavigate()

    function clickfxn(link){
        navigate(link)
    }

    return (
        <body>
        <header>
            <div className="the-title">Web Trading Journal</div>
            <div className="right-side">
                <div className="home" href="index.html">Home</div>
                <div className="contact" href="contact.html">Contact</div>
                <div className="faq" href="faq.html">FAQ</div>
                <div className="login" onClick={()=>{clickfxn('/login')}}>Log In</div>
                <div className="signup" onClick={()=>{clickfxn('/register')}}>Sign Up</div>
            </div>
            
        </header>
        <div className="outside">
            <div className="inside-first">
                <div className="heading">Free trading journal to aid your growth</div>
                <p className="content">Web Trade Journal is a web-based trading journal 
                    that allows you to record, analyze, and review your trading 
                    activities from any internet-connected device. 
                    Designed by experts in the trading industry, 
                    it can help you gain an edge and limit your losses. You may get
                     a free trial right now.</p>
                     <p className="cite">illustration by "Hurca" via dribble</p>
                <div className="create-account" onClick={()=>{clickfxn('/register')}}>Create Account</div>
            </div>
            <div className="image1">
                <img className="imag1" src={require('../resources/trade.webp')} alt='illustration'/>
            </div>
        </div>

        <div className="features" >
            <p className="ftext">Features</p>
            <div className="features-grid">
                <div className="f-container">
                    <div className="m-accounts">Multiple Accounts</div>
                    <div className="m-account-desc">Create multiple accounts and log in entries
                         and keep reports seperately</div>
                </div>

                <div className="f-container">
                    <div className="m-accounts">Advanced Statistics</div>
                    <div className="m-account-desc">Flexible advanced stats will help to 
                        find you the strengths and weaknesses of your trading strategy</div>
                </div>

                <div className="f-container">
                    <div className="m-accounts">Detailed reporting</div>
                    <div className="m-account-desc">generate absolutely stunning detailed
                         reports that helps you visualize your progress.</div>
                </div>

                <div className="f-container">
                    <div className="m-accounts">Community</div>
                    <div className="m-account-desc">communicate with other traders, see their 
                        progress if displayed publicly.</div>
                </div>
                

            </div>
            <div className="quote-block">
                <p className="quote">The best time to begin keeping a journal is when you decide to 
                    -Hannah Hinchman</p>
                <div className="get-started" onClick={()=>{clickfxn('/register')}}>Get Started</div>
            </div>

        </div>

        <div className="third-area">
            <div className="why">Why do you need to keep records of your trades?</div>
            <p className="why-text">Using specialized trading journal software can make keeping track 
                of your trades even easier when you have a lot of data to look back on and require 
                additional technical support while tracking and analyzing your trades. You can record 
                all of your deals in this diary, together with all of the pertinent information, in a 
                format that will make it easy to search and review later. You may easily keep tabs on 
                closed transactions, opened deals, and average profits by entering the trades' exit and 
                entrance prices with the relevant dates. To avoid the complications that can arise when 
                using pen and paper or Excel as a trading log, consider switching to dedicated software. 
                Using Web Trading Journal is easier, so you can devote more time to identifying profitable 
                transactions.</p>
            <div className="create-account" onClick={()=>{clickfxn('/register')}}>Create Account</div>


        </div>
        <div className="footer">
            <div className="space"> </div>
            <div className="foot">Copyright @dev.banger 2022</div>
        </div>
 
    </body>

    )
}

export default Landing