import { Route, Routes, Navigate } from 'react-router-dom';
// layouts

import GuestLayout from './layouts/GuestLayout';
import AuthLayout from './layouts/AuthLayout';

import StudentLayout from './layouts/User/StudentLayout';
import ProfessorLayout from './layouts/User/ProfessorLayout';
import DirectorLayout from './layouts/User/DirectorLayout';

// Not found page
import NotFound from './layouts/User/NotFound';

// Director pages
import DirectorDashboard from './pages/director/DirectorDashboard';
import ManageProfessors from './pages/director/ManageProfessors';
import ManageDepartments from './pages/director/ManageDepartments';
import EditData from './pages/director/EditData';
import ManageStudents from './pages/director/ManageStudents';


const App = () => {
  return (
    <>
          <Routes>
            <Route path="/" index element={<GuestLayout />} />

            <Route path="/auth" element={<AuthLayout />}>
              {/* --------- --  -- - -- - -- - -- - - - -- - - - --  --  */}
              <Route path="student" element={<StudentLayout />} />

              {/* --------- --  -- - -- - -- - -- - - - -- - - - --  --  */}
              <Route path="professor" element={<ProfessorLayout />} />

              {/* --------- --  -- - -- - -- - -- - - - -- - - - --  --  */}

              <Route path="director" element={<DirectorLayout />} >
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path='dashboard' element={<DirectorDashboard />} />
                <Route path='professors' element={<ManageProfessors />} />
                <Route path='departments' element={<ManageDepartments />} />
                <Route path='students' element={<ManageStudents />} />
                <Route path='edit' element={<EditData />} />
              </Route>
            </Route>

            <Route path='*' element={<NotFound />} />

          </Routes>
    </>
  );
};

export default App;
