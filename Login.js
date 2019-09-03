import React, { Component } from 'react'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return(
            <div className="card">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="display-1">Inicio Sesión</h1>
                        <label name="username">Correo Electrónico: </label>
                        <input type="text" name="username" id="username" className='form-control'/>
                        <label name="password">Contraseña: </label>
                        <input type="text" name="password" id="password" className='form-control'/>
                    </div>
                </div>
            </div>
        )
    }
}