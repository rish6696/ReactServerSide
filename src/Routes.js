import React from 'react'
import Home from '../src/client/components/Home'
import { Route } from 'react-router-dom'

export default () => {
    return (
        <div>
            <Route exact path='/' component={Home} >
            </Route>
        </div>
    )
}