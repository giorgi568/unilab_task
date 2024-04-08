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
    if (!isAuthenticated()) {
      navigate('/signUp');
    }
  });

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AuthenticatedRoute;
