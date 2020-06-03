import React from 'react'
import Home from '../src/client/components/Home'
import  UsersList,{loadData} from '../src/client/components/usersList'


export default[
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        path:'/user',
        component:UsersList,
        exact:true,
        loadData
        
    }
]

// export default () => {
//     return (
//         <div>
//             <Route exact path='/' component={Home} >
//             </Route>
//             <Route exact path='/users' >
//                 <UsersList></UsersList>
//             </Route>
//         </div>
//     )
// }