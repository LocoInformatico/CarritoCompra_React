import React from 'react'
import { Link } from 'react-router'

class App extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/usuarios">Carrito</Link></li>
                    <li><Link to="/lenguajes">Cierre Sección</Link></li>
                </ul>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default App;