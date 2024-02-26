import {useState} from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage(
    {
        signUp,
        login
    }
){
    const [showLogin, setShowLogin] = useState(true)
    return(
        <>
        <button onClick={()=>{setShowLogin(!showLogin)}}> {showLogin? "Do have have an account? Please click to create an account" :"Already have an ccount? Please click to log in"} </button>
        {
            showLogin? 
            <LoginForm
            login={login}/>:<SignUpForm signUp={signUp}/>
        }
        </>
    )
}