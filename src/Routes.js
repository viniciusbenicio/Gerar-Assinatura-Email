import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import YourSignature from './pages/YourSignature';

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/your-signature" element={<YourSignature />} />
        </Routes>
    );
}