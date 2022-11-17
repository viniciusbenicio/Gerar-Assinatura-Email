import AppRoutes from './Routes';
import { BrowserRouter, Link} from 'react-router-dom';
import {Navbar, NavbarBrand  } from 'reactstrap';

export default function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar  className="my-2" color="dark" dark>
          <NavbarBrand>
              <Link to="/">Home</Link>
              <Link to="/your-signature">Your signature</Link>
          </NavbarBrand>
        </Navbar>
       <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

