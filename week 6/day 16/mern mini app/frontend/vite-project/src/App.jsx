import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import CreateEmp from './components/createEmp'
import ListofEmp from './components/ListofEmp'
function App() {
    const routerObj=createBrowserRouter([
        {
        path:"/",
        element:<RootLayout/>,
        children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:"create-emp",
            element:<CreateEmp/>
        },
         {
            path:"list",
            element:<ListofEmp/>
        },
         
        ]
        }

    ])
 
    return (
    <RouterProvider router={routerObj} />
  )


}

export default App
