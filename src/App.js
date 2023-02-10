import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="max-w-[1920px] mx-auto ">
     <Provider store={store}>
      <RouterProvider router={router}>

      </RouterProvider> 
     </Provider>
    </div>
  );
}

export default App;
