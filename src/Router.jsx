import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import SignUp from './components/SignUp';

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
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
