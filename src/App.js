// src/App.js
import React from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';

import { Typography } from '@douyinfe/semi-ui';
import LayoutPage from './Layout/Layout';
import LoginPage from './Pages/Login/Login';
const { Text } = Typography;

const Home      = () => <Text>Home</Text>;
const About     = () => <Text>About</Text>;
const Users     = () => <Text>Users</Text>;
const Dashboard = () => <Text>Dashboard</Text>;
const Settings  = () => <Text>Settings</Text>;

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path          = "/" element          = {<Navigate to="/dashboard" replace />} />
          <Route path          = "/login" element     = {<LoginPage />} />
          <Route path          = "/dashboard" element = {<LayoutPage />}>
          <Route index element = {<Dashboard />} />
          <Route path          = "about" element      = {<About />} />
          <Route path          = "users" element      = {<Users />} />
          <Route path          = "settings" element   = {<Settings />} />
          </Route>
        </Routes>
    </Router>
  );
};

export default App;
