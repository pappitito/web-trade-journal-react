import React from 'react'
import {useNavigate} from 'react-router-dom'
import './login.css'

const api_base = "http://localhost:5000/wbt/api/users/login"

function Login(){

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const navigate = useNavigate()

    async function continuelogin(){
        const data = await fetch(api_base, {
            method: 'POST',
            headers: {"Content-type": "application/json" },  
            body: JSON.stringify({    email: email, password: password  })
        }).then(res => res.json())
        .catch(error => console.log(error))

        let headname = data.user.name
        headname = headname.charAt(0).toUpperCase() + headname.slice(1)

        localStorage.setItem('token', data.token)
        console.log(data.token)
        localStorage.setItem('name', headname)
        navigate('dashboard')

    }

    return (
        <body>
            <header>
                <div className="the-title">Web Trading Journal</div>
                <div className="right-side">
                     <div className="home" href="index.html">Home</div>
                     <div className="contact" href="contact.html">Contact</div>
                     <div className="faq" href="faq.html">FAQ</div>
                        <div className="signup" onClick={()=>{
                            navigate(-1)
                            navigate('register')
                            
                        }}>Sign Up</div>
                </div>
            
            </header>
            <div className="try">
                <div className="frame">
                    <div className="label">Login to your account</div>
                    <input className="email" type="text" placeholder="E-mail"
                                  onChange={e => {
                                    return setEmail(e.target.value)
                                }}   value={email} />
                    <input className="password" type="text" placeholder="Password"
                                      onChange={e => {
                                        return setPassword(e.target.value)
                                    }}
                                    value={password}  />
                     <div className="continue" onClick={()=> continuelogin()}>Continue</div>
    
                </div>
            </div>
        

    </body>
    )
}

export default Login;