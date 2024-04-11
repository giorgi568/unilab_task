import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import SignUp from './SignUp';
import AuthenticatedRoute from './ProtectedRoute';
import Services from './Services';
import SignIn from './SignIn';
import Flights from './Flights';
import Stays from './Stays';
import Resort from './Resort';

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
            {
              path: '/services/stays/:id',
              element: <Resort />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
