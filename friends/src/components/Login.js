import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {

    // console.log(props)
   const [credentials, setCredentials] = useState({
       
           username: "",
           password: ""

       
   })
   

   const [isLoading, setIsLoading] = useState(false);



   const handleChange = e => {
    //    console.log(e.target.name, e.target.value);
    // console.log(credentials);
       setCredentials({...credentials,
           [e.target.name]: e.target.value
           
       })
       
   }

   const login = e => {
       e.preventDefault();
       setIsLoading(true);
      axios
       .post("http://localhost:5000/api/login", credentials)
       .then((res) => { 
           console.log('Username, Password sent to the auth server, token as payload returned:', res.data.payload)
           localStorage.setItem('token', res.data.payload);
           setIsLoading(false);
           props.history.push('/protected');
       })
       .catch((err) => console.log(err))
   }

   return (
       <div>
           <form onSubmit={login}>
               <input 
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
               />

               <input 
                 type="password"
                 name="password"
                 value={credentials.password}
                 onChange={handleChange}
               />
               <button onClick={login}>Login</button>
           </form>
       </div>
   )
}

export default Login;