import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login } from './pages';
import { ThemeProvider } from 'styled-components';
import * as ROUTES from './constants/router';
import theme from './assets/theme';
import './app.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route key="Home" path={ROUTES.HOME} element={<Home />} />
          <Route key="Login" path={ROUTES.LOGIN} element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
