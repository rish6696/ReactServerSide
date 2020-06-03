import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import Reducers from '../client/reducers/index'


export default ()=>{
    const store= createStore( Reducers,applyMiddleware(reduxThunk) )
    return store
}
