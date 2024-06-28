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
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import OverviewPage from './pages/Dashboard/Dashboard/Overview';
import SinglePage from './pages/Dashboard/Dashboard/Single';
import LayoutPage from './pages/Dashboard/Layout';
import LoginPage from './pages/Login/LoginPage';
const { Text } = Typography;

const Main = () => {
  return (
    <Router>
        <Routes>
          <Route path    = "/" element          = {<Navigate to="/dashboard" replace />} />
          <Route path    = "/login" element     = {<LoginPage />} />
          <Route path    = "/dashboard" element = {<LayoutPage />}>
            <Route element = {<Dashboard />} index/>
            <Route path    = "overview" element   = {<OverviewPage />} />
            <Route path    = "single" element     = {<SinglePage />} />
          </Route>
        </Routes>
    </Router>
  );
};

export default function App(){
  return (
    <I18nextProvider i18n = {i18n}>
      <Main />
    </I18nextProvider>
  );
};
