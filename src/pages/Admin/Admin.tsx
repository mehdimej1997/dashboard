import { Outlet } from 'react-router-dom';
import { Sidebar, Navbar } from '../../components';

function Admin() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto">
        <Navbar />
        <div className="mx-auto px-28">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admin;
