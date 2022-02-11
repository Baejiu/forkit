import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login } from './pages';
import * as ROUTES from './constants/router';
import './app.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route key="Home" path={ROUTES.HOME} element={<Home />} />
        <Route key="Login" path={ROUTES.LOGIN} element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
