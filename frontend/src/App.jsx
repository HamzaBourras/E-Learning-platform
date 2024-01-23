import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GuestLayout from './layouts/GuestLayout';
import AuthLayout from './layouts/AuthLayout';

import StudentLayout from './layouts/User/StudentLayout';
import ProfessorLayout from './layouts/User/ProfessorLayout';
import DirectorLayout from './layouts/User/DirectorLayout';
import NotFound from './layouts/User/NotFound';
import DirectorDashboard from './pages/director/DirectorDashboard';
import ManageTeachers from './pages/director/ManageTeachers';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GuestLayout />} />

          <Route path="/auth" element={<AuthLayout />}>
            {/* --------- --  -- - -- - -- - -- - - - -- - - - --  --  */}
            <Route path="student" element={<StudentLayout />} />
            
            {/* --------- --  -- - -- - -- - -- - - - -- - - - --  --  */}
            <Route path="professor" element={<ProfessorLayout />} />

            {/* --------- --  -- - -- - -- - -- - - - -- - - - --  --  */}

            <Route path="director" element={<DirectorLayout />} >
              <Route path='dashboard' index element={<DirectorDashboard/>} />
              <Route path='teachers' element={<ManageTeachers/>} />
            </Route>
          </Route>

          <Route path='*' element={<NotFound/>} />

        </Routes>
      </Router>
    </>
  );
};

export default App;
