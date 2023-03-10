
import React, {useState} from 'react'
import { create } from '../services/users'
import { useNavigate } from 'react-router-dom'
import '../styles/AngelSignUp.css'

export default function AngelSignUp() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [isSeasonal, setIsSeasonal] = useState(null)

    let navigate = useNavigate();

    const routeChange = () => {
        let path = `/angel-specs`;
        navigate(path);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (firstName != "" 
            && lastName != ""
            && email != ""
            && pass != ""
            && pass == confirmPass) {
            create({username: email, password: pass, isAngel: true})
            routeChange()
            //route to next page
        }
        else window.alert("Please fill in all of the required information!")
    }
    
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className='name'>
                <h3>First Name:</h3>
                <input
                    type="text"
                    id="input-first-name"
                    autoComplete="off"
                    onChange={(e) => {setFirstName(e.target.value)}}
                />
                <h3>Last Name:</h3>
                <input
                    type="text"
                    id="input-last-name"
                    autoComplete="off"
                    onChange={(e) => {setLastName(e.target.value)}}
                />
                </div>
                <h3>Email:</h3>
                <input
                    type="text"
                    id="input-email"
                    autoComplete="off"
                    onChange={(e) => {setEmail(e.target.value)}}
                />
                <h3>Password:</h3>
                <input
                    type="password"
                    id="input-password"
                    autoComplete="off"
                    onChange={(e) => {setPass(e.target.value)}}
                />
                <h3>Confirm Password:</h3>
                <input
                    type="password"
                    id="input-password"
                    autoComplete="off"
                    onChange={(e) => {setConfirmPass(e.target.value)}}
                />
                <h3>When do you offer your service?</h3>
                <input
                    type="radio" value="year-round"
                ></input>
                <input
                    type="radio" value="seasonal"
                />
            <button type="submit" className="submit-angel-signup">
                Submit
            </button>
            </form>
        </div>
    )

}
