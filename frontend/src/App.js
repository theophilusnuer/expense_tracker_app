import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Transactions from "./pages/transactions";
import Budgets from "./pages/budgets";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import Reports from "./pages/reports_page";


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/transactions", element: <Transactions /> },
    { path: "/budgets", element: <Budgets /> },
    { path: "/reports", element: <Reports /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
