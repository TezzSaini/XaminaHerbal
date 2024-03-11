import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App(){
    const router = createBrowserRouter([
        {path:"/", 
        element: <Home/>},

        {path:"/login",
        element: <LoginPage/>},

        {path:"/register",
        element: <RegisterPage/>}
    ])

    return(
        <>
        <RouterProvider router={router} />
        </>    
    )
}

export default App;