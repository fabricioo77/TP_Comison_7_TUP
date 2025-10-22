import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      path: ROUTES.DASHBOARD,
      icon: '📊',
      label: 'Dashboard',
      exact: true
    },
    {
      path: ROUTES.SOCIOS,
      icon: '👥',
      label: 'Socios'
    },
    {
      path: ROUTES.DEPORTES,
      icon: '⚽',
      label: 'Deportes'
    },
    {
      path: ROUTES.PAGOS,
      icon: '💰',
      label: 'Pagos'
    }
  ];

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="sidebar bg-white text-white">
      <div className="sidebar-header p-3 border-bottom border-secondary">
        <h4 className="mb-0">🏆 Club Deportivo</h4>
        <small className="text-muted">Panel de Administración</small>
      </div>

      <Nav className="flex-column p-3">
        {menuItems.map((item) => (
          <Nav.Link
            key={item.path}
            as={Link}
            to={item.path}
            className={`text-dark ${
              isActive(item.path, item.exact) ? 'active' : ''
            }`}
          >
            <span className="me-2">{item.icon}</span>
            {item.label}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;