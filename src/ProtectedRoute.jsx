import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function AuthenticatedRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = () => {
      const status = localStorage.getItem('status');
      if (status === 'true') {
        return true;
      }
      return false;
    };
    if (!isAuthenticated() && localStorage.getItem('fname')) {
      navigate('signIn');
    } else if (!isAuthenticated()) {
      navigate('/signUp');
    }
    //we are checking fname to find out if user is already registered and just signed out
  });

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AuthenticatedRoute;
