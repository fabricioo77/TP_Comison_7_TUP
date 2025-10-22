import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { ROUTES } from '../constants/routes';
import Sidebar from '../components/ui/Sidebar';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName') || 'Usuario';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <Container fluid className="p-4">
        <Outlet />
      </Container>
    </div>
  );
};

export default DashboardLayout;