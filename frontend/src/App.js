import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import LandPage from './pages/landing_page';
import UserProfile from './pages/user_profile';
import Reg from './pages/landing_page/reg';
import Transactions from './pages/all_transactions';



function App() {
  const router = createBrowserRouter([
  {path:"/", element: <LandPage/>},
  {path:"/user", element: <UserProfile/>},
  {path:"/register", element: <Reg/> },
  {path:"/transactions", element: <Transactions/> },

  ]);


  return (
   <>
  <RouterProvider router={router}/>
   </>
  );
}

export default App;
