import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login"
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import SecCourses from './Modules/Sec_Courses';
import SecMyCourses from './Modules/Sec_MyCourses';
import SecChallange from './Modules/Sec_Challange';
import NotFound from './Pages/NotFound';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth/login" exact element={<Login />} />
        <Route path="/auth/signup" exact element={<SignUp />} />
        <Route path='/dashboard' exact element={<Dashboard />}>
          <Route path='/dashboard/courses' exact element={<SecCourses />} />
          <Route path='/dashboard/mycourses' exact element={<SecMyCourses />} />
          <Route path='/dashboard/challanges' exact element={<SecChallange />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;
