import { renderToString } from 'react-dom/server'
import Routes from '../Routes'
import { StaticRouter } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { renderRoutes }  from 'react-router-config'



export default (req,store) => {
   const content = renderToString(
      <Provider store={store} >
         <StaticRouter context={{}} location={req.path}  >
            {renderRoutes(Routes)}
         </StaticRouter>
      </Provider>
   )
   const html = `
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