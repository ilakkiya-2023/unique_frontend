import { useEffect, useState } from 'react'
import Login_pic from '../assets/2.png'
import light_bg from '../assets/3.png'
// import 

export const Login_page=()=>{

    const [username , setUserName] = useState('')
    const [password , setPassword] = useState('')
    const [error , setError] = useState('');

    

    const handlesubmit = (e) => {
        e.preventDefault();
        if (!username.trim() || !password.trim()){
            setError('Please enter both user ID and password');
            return;
        }
        else{
            
        }
        // else{
        //         props.handleClick({username , password})
           

        // }
        // fetch('localhost:8000/get-user' , {mode : 'cors'})
        // .then(()=> setUserName(data.filter((detail) => {detail.user_id == e.user_id})))

    }


    return(
        <div className='login'>
            <div className="bg1"> <img src= {light_bg} alt="not available"  /> <div>  </div>
            <div className='background1'>
            <h2>LOGIN_PAGE</h2>
                <form>
                    <div className='user'>
                        <label>Username:</label>
                        <input type="text" name="username"  onChange={(user) => {setUserName(user.target.value)}  } value={username} />
                        {error.username && <div className="error"> username is required or enter correct details </div> }
                    </div>
                    <br/>
                    <div>
                         <label>Password:</label>
                        <input type="password" name="password" onChange={((pass)=> {setPassword(pass.target.value)})} value={password} />
                        {error.password && <div className="error"> password is required or enter correct details </div> }
                    </div>
                        <button style={{ backgroundColor: '#50B7B6', color: 'white' }} type="submit" onChange={handlesubmit} >  Login  </button>
                    </form>
            <div> Not a member ?</div>
                <div>
                <button > <a href="/doctor-sigup">Doctor SignUp</a></button>
                <button ><a href="/signup">Patient SignUp</a></button>
            </div>
        </div>
        </div>
        </div>
    );
}; 