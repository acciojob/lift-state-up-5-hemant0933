import React, { useState } from 'react';

const Child = ({isLoggedIn,setLoggedIn}) => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

    const handleMessage = () => {
        if(name != '' && password != ''){
            setLoggedIn(true);
        }else{
            setLoggedIn(false);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
  return (
    <div className='child'>
       {
        isLoggedIn ? <p>You are logged in!</p> 
        :
        <form onSubmit={(e)=>handleSubmit(e)}>
        <label>Username:</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} /><br/><br/>
        <label>Password:</label>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
        <button onClick={handleMessage}>Login</button>
        </form>
       }
    </div>
  );
}

export default Child;
