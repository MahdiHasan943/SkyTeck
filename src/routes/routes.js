import { createBrowserRouter } from "react-router-dom";
import AddToCart from "../component/addT/AddToCart";
import Courses from "../component/courses/Courses";
import Authentication from "../component/login/Authentication";
import Login from "../component/login/Login";
import Registration from "../component/login/Registration";
import Dashboard from "../dashboard/Dashboard";
import Main from "../layout/Main";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    

    {
        path: '/',
        element: <Main></Main>,
        
        children: [
            
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/home',
                element:<Home></Home>
            }
            ,
            {
                path: '/courses',
                element:<Courses></Courses>
            }
            ,
            {
                path: '/addToCart',
                element:<AddToCart></AddToCart>
            }
            ,
             {
                 path: '/login',
              element:<Login></Login>
            }
           ,
            {
                 path: '/register',
                element:<Registration></Registration>
            }
            ,
            {
                path: '/auth',
                element:<Authentication></Authentication>
            }
            
        ]
    }
,
    {
        path: '/dashboard',
        element:<Dashboard></Dashboard>
    }
])