import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front from "./Front";
import Users from "./screens/users/User";
import Dashboard from "./screens/users/Dashboard";
import Myticket from "./screens/users/Myticket";
import Newticket from "./screens/users/Newticket";
import Admin from "./screens/admin/Admin";
import Profile from "./screens/users/Profile";
import EdituserProfile from "./screens/users/EdituserProfile";
const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/users" element={<Users />}>
          <Route path="/users/dashboard" element={<Dashboard />} />
          <Route path="/users/profile" element={<Profile />}/>
          <Route  path="/users/edit" element={<EdituserProfile />} />
          <Route path="/users/myticket" element={<Myticket />} />
          <Route path="/users/newticket" element={<Newticket />} />
        </Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
