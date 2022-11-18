import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Login } from './views/auth/Login'
import Layout from './views/Layout'
import RequireAuth from './views/RequireAuth'

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path="/" element={<Layout />}>

      <Route path="login" element={<Login />} />

         {/* we want to protect these routes */}
         <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Login />} />
        </Route>
      {/* <Route path="register" element={<Register />} />
      <Route path="linkpage" element={<LinkPage />} />
      <Route path="unauthorized" element={<Unauthorized />} />


      <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
        <Route path="/" element={<Home />} />
      </Route>



      <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        <Route path="admin" element={<Admin />} />
      </Route> */}




    </Route>
  </Routes>
  )
}

export default App
