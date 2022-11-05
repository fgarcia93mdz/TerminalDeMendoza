import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';

import axios from 'axios'




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        setEmail(email)
        setPassword(password)
        console.log('email:', email)
        console.log('password:', password)
    }, [email, password])
    

    const handleSubmit = (e) => {
        e.preventDefault()

        if(email === '' || password === ''){
            // alert('Please fill in all fields')
        }

        if(email.length > 0 && password.length > 0){
            alert('se submiteo!', email, password)
          
                const url = 'http://localhost:8080/auth'
            
                const data = {
                    email:"cdardanelli",
                    password:"1234"
                }
            
                axios.post(url, data)
                .then((res) => {
                    console.log('response', res)
                    // 
                    if(res.status === 200){
                        const jwt = res.data
                        // escribe el jwt en session
                        window.sessionStorage.setItem("jwt", jwt);
                        // redirecciona a la pagina principal
                        return navigate("/")
                    }
                })
                .catch(function (error) {
                    console.log('error', error);
                });
            
        }


    }


    return (
           
        <div className="container">
            <div className="login">

            
                <h1 className='azul bienvenido'>Bienvenido</h1>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='item'>
                        <label htmlFor='email' className='azul'>Usuario:</label> <br />
                        <input type="text" name='email' value={email}   onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='item'>
                        <label htmlFor="password" className='azul' >Contraseña:</label> <br />
                        <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    
                    <button type='submit'>Iniciar sesión</button>
                    

                    <div>
                        <a href='/#' className='cambiar-cont'>Olvidé mi contraseña</a>
                    </div>
                </form>
            </div>
        </div>
        
    );
}

export default Login;
