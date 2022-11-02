import React from 'react';
import './login.css';

const Login = () => {
    return (
        <body>    
        <div className='login'>
            <h1 className='azul bienvenido'>Bienvenido</h1>

            <form>
                <div className='item'>
                    <label htmlFor="" className='azul'>Usuario:</label> <br />
                    <input type="text" />
                </div>
                <div className='item'>
                    <label htmlFor="" className='azul'>Contraseña:</label> <br />
                    <input type="password" />
                </div>

                <div>
                    <button>Iniciar sesión</button>
                </div>

                <div>
                <a href='' className='cambiar-cont'>Olvidé mi contraseña</a>
                </div>
            </form>
        </div>
        </body>
    );
}

export default Login;
