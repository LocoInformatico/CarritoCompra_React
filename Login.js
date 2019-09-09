import React, { Component } from 'react'
import './css/login.css';

class Login extends Component {
    render() {
        return(
            <div className='container m-auto'>
                <div className='row contenedor'>
                    <div className='col-4'></div>
                    <div className='col-md-4 my-auto text-white'>
                        <h1 className="text-center">Inicio Sesión</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Correo Electronico</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su Correo"></input>
                                <small id="emailHelp" className="form-text">
                                    Nunca compartiremos su correo electrónico con nadie más.
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Enviar
                            </button>
                        </form>
                    </div>
                    <div className='col-4'></div>
                </div>
            </div>
        )
    }
}

export default Login