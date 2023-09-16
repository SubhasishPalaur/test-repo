import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewPage from './NewPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={NewPage} />
        <Route path="/login-page" Component={LoginPage}/>
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;

