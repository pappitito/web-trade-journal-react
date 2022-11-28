import React from 'react'
import './dashboard2.css'
import Popup from './popup'
import { useEffect } from 'react';

const api_url = "http://localhost:5000/wbt/api/tradelogs"
const filter_url_wins = "http://localhost:5000/wbt/api/tradelogs/filter?result=won"
const filter_url_loss = "http://localhost:5000/wbt/api/tradelogs/filter?result=lost"
const filter_url_even = "http://localhost:5000/wbt/api/tradelogs/filter?result=breakeven"

function Dashboard(){
    const [trades, setTrades] = React.useState([])
    const [wins, setWins] = React.useState([])
    const [loss, setLoss] = React.useState([])
    const [even, setEven] = React.useState([])
    const [btnPopUp, setBtnPopUp] = React.useState(false)
    const [pair, setPair] = React.useState("")
    const [date, setDate] = React.useState("")
    const [strategy, setStrategy] = React.useState("")
    const [direction, setDirection] = React.useState("")
    const [entry, setEntry] = React.useState("")
    const [size, setSize] = React.useState("")
    const [stopLoss, setStopLoss] = React.useState("")
    const [takeProfit, setTakeProfit] = React.useState("")
    const [exit, setExit] = React.useState("")
    const [closeDate, setCloseDate] = React.useState("")

    useEffect(()=>{
          getTrades()
        
        
      })
//function to get trades
      async function getTrades(){
         await fetch(api_url, {
            method: 'GET',
            headers: {"Content-type": "application/json",
                      "authorization": `Bearer ${localStorage.getItem('token')}` }
    
        })
          .then(res => res.json())
          .then(data => data.allLogs)
          .then((data) => {
            let newArray = data.map(item =>{
              return{
                ...item,
                editActive: true
               
              }
            })
            return setTrades(newArray)
          })
          .catch(err => console.error(err))

         // getWins()
         // getLoss()
         // getEven()
      }
      
    //function to get wins
    // eslint-disable-next-line
    async function getWins(){
        await fetch(filter_url_wins, {
            method: 'GET',
            headers: {"Content-type": "application/json",
                      "authorization": `Bearer ${localStorage.getItem('token')}` }
    
        })
          .then(res => res.json())
          .then(data => data.log)
          .then((data) => {
            
            let newArray = data.map(item =>{
              return{
                ...item,
                editActive: true
               
              }
            })
            return setWins(newArray)
          }).catch(err => console.error(err))
    }
    //function to get losses
    // eslint-disable-next-line
    async function getLoss(){
        await fetch(filter_url_loss, {
            method: 'GET',
            headers: {"Content-type": "application/json",
                      "authorization": `Bearer ${localStorage.getItem('token')}` }
    
        })
          .then(res => res.json())
          .then(data => data.log)
          .then((data) => {
            
            let newArray = data.map(item =>{
              return{
                ...item,
                editActive: true
               
              }
            })
            return setLoss(newArray)
          }).catch(err => console.error(err))
    }
    //function to get even
    // eslint-disable-next-line
    async function getEven(){
        await fetch(filter_url_even, {
            method: 'GET',
            headers: {"Content-type": "application/json",
                      "authorization": `Bearer ${localStorage.getItem('token')}` }
    
        })
          .then(res => res.json())
          .then(data => data.log)
          .then((data) => {
            
            let newArray = data.map(item =>{
              return{
                ...item,
                editActive: true
               
              }
            })
            return setEven(newArray)
          }).catch(err => console.error(err))
    }
    //function to create new log
    async function createLog(){
        const data =   await fetch(api_url, {
          method: 'POST',
          headers: {"Content-type": "application/json",
                   "authorization": `Bearer ${localStorage.getItem('token')}` },  
          body: JSON.stringify({    
            pair: pair, 
            openDate: date,
            strategy: strategy,
            direction: direction,
            entryPrice: entry,
            stopLoss: stopLoss,
            takeProfit: takeProfit,
            positionSize: size,
            exitPrice: exit,
            closeDate: closeDate
        
        })
          
        })
        .then(res => res.json())
          .then(data => data.allLogs)
          .catch(err => console.error(err))
       
       console.log(data)
       setPair('')
       setDate('')
       setStrategy('')
       setDirection('')
       setEntry('')
       setSize('')
       setStopLoss('')
       setTakeProfit('')
       setExit('')
       setCloseDate('')


      
      }
    return (
        <body>
        <header>
            <div className="the-title">Web Trading Journal</div>
            <div className="right-side">
                <a className="home" href="index.html">Home</a>
                <a className="contact" href="contact.html">Contact</a>
                <div className="faq">Get Report</div>
                <div className="login">Edit Logs</div>
                <a className="signup" href="login.html">Sign Out</a>
            </div>
        </header>

        <main>
           <h1 className="dashb">DASHBOARD</h1> 

           <div className="outer">
              <div className="inner1">
                <img className="imag" src={require('../resources/profile.png')} alt='profile' />
                <p className="acc">{`Account Name: ${localStorage.getItem('name')}`}</p>
              </div>
              <div className="inner2">
                <div className="summary">TRADE SUMMARY</div>
                <div className="grid">
                    <div className="box1">
                        <div className="numberL">{trades.length}</div>
                        <div className="label">TOTAL TRADES</div>
                    </div>
                    <div className="box1">
                        <div className="numberL">{wins.length}</div>
                        <div className="label">WINS</div>
                    </div>
                    <div className="box1">
                        <div className="numberL">{loss.length}</div>
                        <div className="label">LOST</div>
                    </div>
                    <div className="box1">
                        <div className="numberL">{even.length}</div>
                        <div className="label">BREAK EVEN</div>
                    </div>
                    <div className="box1">
                        <div className="numberL">40%</div>
                        <div className="label">WIN RATE</div>
                    </div>
                    <div className="box1">
                        <div className="numberL">3.127</div>
                        <div className="label">AVG R/R RATIO</div>
                    </div>
                </div>
                <div className="insight">View Insights</div>


              </div>
           </div>

           <div className="newlog" onClick={()=> setBtnPopUp((prev)=>{
            return !prev
           })}>+</div>
           <Popup trigger={btnPopUp} >
                <button className='close-btn' onClick={()=> setBtnPopUp(false)}>close</button>
                <h3>testing testing</h3>
                <div className='newLogForm'>
                    <input className='logInput' type="text" placeholder='pair ticker'
                    onChange={e => {
                        return setPair(e.target.value)
                    }}
                    value={pair} />
                    <input className='logInput' type="text" placeholder='open date(yyyy-mm-dd)'
                    onChange={e => {
                        return setDate(e.target.value)
                    }}
                    value={date} />
                    <input className='logInput' type="text" placeholder='strategy'
                    onChange={e => {
                        return setStrategy(e.target.value)
                    }}
                    value={strategy} />
                    <input className='logInput' type="text" placeholder='direction'
                    onChange={e => {
                        return setDirection(e.target.value)
                    }}
                    value={direction} />
                    <input className='logInput' type="text" placeholder='entry price'
                    onChange={e => {
                        return setEntry(e.target.value)
                    }}
                    value={entry} />
                    <input className='logInput' type="text" placeholder='stop loss'
                    onChange={e => {
                        return setStopLoss(e.target.value)
                    }}
                    value={stopLoss} />
                    <input className='logInput' type="text" placeholder='take profit'
                    onChange={e => {
                        return setTakeProfit(e.target.value)
                    }}
                    value={takeProfit} />
                    <input className='logInput' type="text" placeholder='position size'
                    onChange={e => {
                        return setSize(e.target.value)
                    }}
                    value={size} />
                    <input className='logInput' type="text" placeholder='exit price'
                    onChange={e => {
                        return setExit(e.target.value)
                    }}
                    value={exit} />
                    <input className='logInput' type="text" placeholder='close date(yyyy-mm-dd)'
                    onChange={e => {
                        return setCloseDate(e.target.value)
                    }}
                    value={closeDate} />
                    <button onClick={()=> createLog()}>save</button>
                    
                </div>
           </Popup>

        </main>

    </body>
    )
}
export default Dashboard;