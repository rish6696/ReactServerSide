import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/index'
import store  from '../../helper/createStore'

class UserList extends React.Component {

    componentDidMount(){
       console.log("called componenet di dmount")
       // this.props.fetchUsers()
    }
    
    renderUsers(){
        return this.props.users.map((x)=>{
        return (<li key={x.id}  >{x.name}</li>)
        })
    }

   
    render(){
      return(
          <div>
              Here is the list of users
              <ul>
                  {this.renderUsers()}
              </ul>
          </div>
      )
    }
}

const mapStateToProps = (state)=>{
    console.log("map state to props called")
   return {
       users:state.users
   }
}


export const loadData=(store)=>{
    console.log("load data called")
    return store.dispatch(fetchUsers())  
}
const mapActionToProps={
    fetchUsers:fetchUsers
}
export default connect(mapStateToProps,mapActionToProps)(UserList)