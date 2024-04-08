import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import SignUp from './components/SignUp';
import AuthenticatedRoute from './components/ProtectedRoute';
import Services from './components/Services';

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
      path: 'services',
      element: <AuthenticatedRoute />,
      children: [
        {
          path: 'index',
          element: <Services />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
