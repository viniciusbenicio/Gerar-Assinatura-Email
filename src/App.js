import AppRoutes from './Routes';
import ModalNews from './components/ModalNews';

import { BrowserRouter, Link } from 'react-router-dom';

import './styles/PostForm.css';


export default function App() {
  return (
    <div >

      <BrowserRouter>
        <nav id="menu">
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/your-signature">Your signature</Link>
            </li>
            <li>
            <ModalNews />
            </li>
          </ul>
        </nav>
        <AppRoutes />
      </BrowserRouter>
           
    </div>
  );
}

