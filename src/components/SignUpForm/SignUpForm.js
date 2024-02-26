import {useState} from 'react'
import styles from './SignUpForm.module.scss'

export default function SignUpForm(
    {
        signUp
    }
){
    const [credentials, setCredentials] = useState({
        name: '',
        email:'',
        password: ''
    })

    const handleChange = (e) =>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await signUp(credentials)
        } catch(error){
            console.error(error)
        }
    }

    return(
        <div>
            <h2>Please fill out the form below to create an account</h2>
            <form
            onSubmit={handleSubmit}>
                <input type='text' placeholder='name' value={credentials.name} name='name'
                onChange={handleChange}/>
                <input type='email' placeholder='email' value={credentials.email} name='email'
                onChange={handleChange}/>
                <input type='password' placeholder='password' value={credentials.password} name='password'
                onChange={handleChange}/>
                <input type='submit' value='Create an account' />
            </form>
        </div>
    )
}