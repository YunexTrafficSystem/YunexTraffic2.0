import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../auth/pages/Login'
import { Register } from '../auth/pages/Register'
import { Forgot } from '../auth/pages/Forgot'
import { Home } from '../views/components/Home'
import { Dashboard } from '../views/components/Dashboard'
import { EditProfile } from '../views/components/EditProfile'
import { Laboratorio } from '../views/components/Laboratorio'
import { Ensamble } from '../views/components/Ensamble'
import { Base } from '../views/layouts/Base'
import { Garantias } from '../views/components/Garantias'
import {Mantenimiento} from '../views/components/Mantenimiento'

export const AppRouter = () => {
  return (
    <Routes>

      {/* Login y registro */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot" element={<Forgot />} />
      <Route path="/auth/*" element={<Navigate to="/auth/home" />} />

      {/* YunexApp */}
      <Route path="home" element={<Home />} />
      <Route path="dashboard" element={ <Dashboard/> } />
      <Route path="editProfile" element={<EditProfile />} />
      <Route path="laboratorio" element={<Laboratorio />} />
      <Route path="ensamble" element={<Ensamble />} />
      <Route path="garantías" element={ <Garantias/> } />
      <Route path="mantenimiento" element={ <Mantenimiento/> } />
      <Route path="base" element={ <Base/> } />
      <Route path='/*' element={<Navigate to="/home" />} />

    </Routes>
  )
}
