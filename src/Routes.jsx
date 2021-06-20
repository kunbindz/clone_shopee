import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {path} from './constants/path'
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Login/Register'
import NotFound from './pages/NotFound/NotFound'
export default function Routes() {
    return (
        <Switch>
            <Route path={path.home} exact>
                <Home />
            </Route>
            <Route path={path.login} >
                <Login />
            </Route>
            <Route path={path.register} >
                <Register />
            </Route>
            <Route path={path.notFound} >
                <NotFound />
            </Route>
        </Switch>
    )
}
