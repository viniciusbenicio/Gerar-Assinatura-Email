import {BrowserRouter, Link} from 'react-router-dom';
import AppRoutes from './Routes';

export default function App() {
  return (
    <div className="wrapper">
        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/your-signature">Suas assinaturas</Link>
        </nav>
      <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

