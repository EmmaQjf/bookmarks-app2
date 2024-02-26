import {useState} from 'react'
import styles from './LoginForm.module.scss'

export default function LoginForm(
    {
        login
    }
){
    const [credentials, setCredentials] = useState({
        email:'',
        password: ''
    })

    const handleChange = (e) =>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await login(credentials)
        } catch(error){
            console.error(error)
        }
    }

    return(
        <div>
            <h2>Please fill out the form below to Log In</h2>
            <form
            onSubmit={handleSubmit}>
                <input type='email' placeholder='email' value={credentials.email} name='email'
                onChange={handleChange}/>
                <input type='password' placeholder='password' value={credentials.password} name='password'
                onChange={handleChange}/>
                <input type='submit' value='Login into account' />
            </form>
        </div>
    )
}