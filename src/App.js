import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { Provider } from 'react-redux';
import store from './redux/store';

import PuffLoader from "react-spinners/PuffLoader";

function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
          setLoading(false)
      },1000)
      
  }, [])

  return (
    <div className="max-w-[1920px] scroll-smooth app mx-auto ">
   
      
          
          {loading ?
              <div className='flex justify-center items-center h-[100vh] w-full'><PuffLoader loading={loading} size={100} color="#36d7b7" /></div> :
     
        
              <Provider store={store}>
              <RouterProvider router={router}>
        
              </RouterProvider> 
             </Provider>
          
              
              }
         
       
    


    </div>
  );
}

export default App;
