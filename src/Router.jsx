import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import SignUp from './components/SignUp';
import AuthenticatedRoute from './components/ProtectedRoute';
import Services from './components/Services';
import SignIn from './components/SignIn';
import Flights from './components/Flights';
import Stays from './components/Stays';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: 'signUp',
      element: <SignUp />,
    },
    {
      path: 'signIn',
      element: <SignIn />,
    },
    {
      path: 'services',
      element: <AuthenticatedRoute />,
      children: [
        {
          path: '/services',
          element: <Services />,
          children: [
            { path: '/services/flights', element: <Flights /> },
            {
              path: '/services/stays',
              element: <Stays />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
