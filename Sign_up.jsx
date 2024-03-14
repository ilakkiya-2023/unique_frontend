import React, { useState } from "react";
import axios from 'axios'
import bg from '../assets/3.png'

export const Signup = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState(0)
    const [number, setNumber] = useState(0)
    const [email, setEmail] = useState('')
    const [data, setdata] = useState([])

    const handlesubmit = async(e) => {
        e.preventDefault();
        // console.log("hello world")
        const response = await axios.post('http://localhost:8000/signup',{ user_id: username, password: password, age: age, number: number, email: email })
        console.log(response) 
        // fetch('localhost:8000/signup', {
        //     mode: 'cors',   
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     Body: JSON.stringify({ user_id: username, password: password, age: age, number: number, email: email })
        // }).then((res) => res.json())
        //     .then(() => setdata([...data, { user_id: username, password: password, age: age, number: number, email: email }]))

    }
    return (
        <div>
    <img src={bg} alt="image"  className="back-card"/>
        <div className="signup">
            <h2>SIGN_UP</h2>
            <form onSubmit={handlesubmit}>
                <div>
                    <label>UserName:</label>
                    <input type="text" onChange={(e) => { setUserName(e.target.value) }} value={username} />
                </div>
                <div>
                    <label>Set your Password:</label>
                    <input type="password" onChange={(val) => { setPassword(val.target.value) }} value={password} />
                </div>
                <div>
                    <label>Age         :</label>
                    <input type="number" onChange={(val) => { setAge(val.target.value) }} value={age} />
                </div>
                <div>
                    <label>Phone_no.    :</label>
                    <input type="number" onChange={(val) => { setNumber(val.target.value) }} value={number} />
                </div>
                <div>
                    <label>Email_id:</label>
                    <input type="text" onChange={(val) => { setEmail(val.target.value) }} value={email} />
                </div>
                <button type="submit"><a href="/dashboard">submit</a></button> 
                {/* <button style={{ backgroundColor: 'blue', color: 'white' }} type="submit" onClick={()=>{handlesubmit}}> Sign_up</button> */}
            </form>
            <div>
                Already a member? <a href="/login"> Login</a>
            </div>
        </div>
        </div>
    )
}