import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import LandPage from './pages/landing_page';
import UserProfile from './pages/user_profile';



function App() {
  const router = createBrowserRouter([
  {path:"/", element: <LandPage/>},
  {path:"/userprofile", element: <UserProfile/>},
  {path:"/transactions", element: <UserProfile/>},

  ]);


  return (
   <>
  <RouterProvider router={router}/>
   </>
  );
}

export default App;
