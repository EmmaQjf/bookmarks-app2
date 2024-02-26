import { Route, Routes } from 'react-router-dom'
import {useState, useEffect} from 'react'
import styles from './App.module.scss'


//pages 

import Home from './pages/Home/Home'
import UpdatePage from './pages/UpdatePage/UpdatePage'
import AuthPage from './pages/AuthPage/AuthPage'

//components
import Nav from './components/Nav/Nav'


export default function App() {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState('')

    const login = async(credentials) => {
        try {
            const response = await fetch('/api/users/login', {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            const data = await response.json()
            setUser(data.user)
            setToken(data.token)
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))

        } catch(error){
            console.error(error)
        }

    }

    const signUp = async(credentials) => {
        try {
            const response = await fetch('/api/users/signup', {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            const data = await response.json()
            setUser(data.user)
            setToken(data.token)
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))

        } catch(error){
            console.error(error)
        }

    }
    return (
                <div className = {styles.banner}>  
                <Nav/>
                <Routes>
                    <Route path = '/'  element = {<Home
                    token={token}
                    setToken={setToken}
                    setUser={setUser}
                    user={user}/>}/>
                    <Route path = '/register'  element = {
                    <AuthPage
                    signUp={signUp}
                    login={login}/>}/>
                    <Route path = '/updatepage/:id'  element = {
                    <UpdatePage
                    token={token}
                    setToken={setToken}
                    setUser={setUser}
                    user={user}/>}/>
                </Routes>
                </div>
            )
        }
