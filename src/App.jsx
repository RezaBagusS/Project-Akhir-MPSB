import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login"
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth/login" exact element={<Login />} />
        <Route path="/auth/signup" exact element={<SignUp />} />
        <Route path='/dashboard' exact element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App;
