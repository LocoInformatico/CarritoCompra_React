import React from 'react';
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App.jsx'
import Home from './home.jsx'
import Usuarios from './usuarios.jsx'
import Lenguajes from './lenguajes.jsx'

/*
render(
    <Router history={browserHistory}>
        <Route path='/' component={App} />
        <Route path='/home' component={Home} />
        <Route path='/usuarios' component={Usuarios} />
        <Route path='/lenguajes' component={Lenguajes} />
    </Router>,
    document.getElementById('app')
)
*/
// Utilizando IndexRoute.

render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/usuarios' component={Usuarios} />
            <Route path='/lenguajes' component={Lenguajes} />
        </Route>
    </Router>,
    document.getElementById('app')
)