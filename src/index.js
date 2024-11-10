import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import ErrorPage from './error-page';
import Contact from './contact';
import Accounts from './pages/accounts/accounts';
import CreditCards from './pages/creditCards/creditCards';
import Dashboard from './pages/dashboard/dashboard';
import Investments from './pages/investments/investments';
import Loans from './pages/loans/loans';
import MyPrivileges from './pages/myPrivileges/myPrivileges';
import Services from './pages/services/services';
import Settings from './pages/settings/settings';
import Transactions from './pages/transactions/transactions';



const router = createBrowserRouter([
  {
    path: '/',
    element:<Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "accounts",
        element: <Accounts />,
      },
      {
        path: "creditCards",
        element: <CreditCards />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "investments",
        element: <Investments/>,
      },
      {
        path: "loans",
        element: <Loans />,
      },
      {
        path: "myPrivileges",
        element: <MyPrivileges />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
    ],
  },
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />,
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
