import React from 'react';

const Login = () => {
    return (
        <div>
            Formulario de login

            <form>
                <div>
                    <label htmlFor="">Nombre de usuario:</label> <br />
                    <input type="text" placeholder='ingresa nombre de usuario' />
                </div>
                <div>
                    <label htmlFor="">Contraseña:</label> <br />
                    <input type="password" placeholder='ingresa tu constraseña' />
                </div>

                <button>Ingresar</button>
            </form>
        </div>
    );
}

export default Login;
