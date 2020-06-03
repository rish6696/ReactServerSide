//start up point at client side
import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import Routes from '../Routes'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import Reducers from './reducers/index'
import { renderRoutes }  from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(Reducers,applyMiddleware(reduxThunk))


ReactDom.hydrate(
    <Provider store={store} >
            <BrowserRouter>
            {renderRoutes(Routes)}
    </BrowserRouter>
    </Provider>
    , document.querySelector('#root'))