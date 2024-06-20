// src/App.js
import React from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import i18n from './i18n';

import { Typography } from '@douyinfe/semi-ui';
import { I18nextProvider } from 'react-i18next';
import Dashboard from './pages/Dashboard/Dashboard';
import LayoutPage from './pages/Dashboard/Layout';
import LoginPage from './pages/Login/LoginPage';
const { Text } = Typography;



const Page1      = () => <Text>Page1</Text>;
const Page2      = () => <Text>Page2</Text>;
// const Dashboard  = () => <Text>Dashboard</Text>;

const Main = () => {
  return (
    <Router>
        <Routes>
          <Route path          = "/" element          = {<Navigate to="/dashboard" replace />} />
          <Route path          = "/login" element     = {<LoginPage />} />
          <Route path          = "/dashboard" element = {<LayoutPage />}>
          <Route index element = {<Dashboard />} />
            <Route path          = "page1" element      = {<Page1 />} />
            <Route path          = "page2" element      = {<Page2 />} />
          </Route>
        </Routes>
    </Router>
  );
};

export default function App(){
  return (
    <I18nextProvider i18n={i18n}>
      <Main />
    </I18nextProvider>
  );
};
