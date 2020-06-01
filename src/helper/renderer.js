import { renderToString } from 'react-dom/server'
import Routes from '../Routes'
import { StaticRouter  }   from 'react-router-dom'
import React from 'react'



export default (req)=>{
    const content = renderToString( 
        <StaticRouter context={{}} location={req.path}  >
            <Routes></Routes>
        </StaticRouter>
     )
    const html =`
    <html>
      <head>
        <body>
           <div id='root' >${content}</div>
           <script src='bundle.js' ></script>
        </body>
       </head>
    </html>
   `;
   return html
}