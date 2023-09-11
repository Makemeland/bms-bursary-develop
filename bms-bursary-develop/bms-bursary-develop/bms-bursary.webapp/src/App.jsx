import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import theme from './config/theme';
import AppShell from './containers/AppShell/AppShell';
import SignupShell from './containers/SignupShell/SignupShell';
import Signin from './routes/FeatureRoutes/Signin/Signin';
import LandingPage from './routes/FeatureRoutes/Signup/LandingPage';
import Register from './routes/FeatureRoutes/Signup/Register';
import SignupOptions from './routes/FeatureRoutes/Signup/SignupOptions';

function App() {
  const [testState, setTestState] = React.useState();

  return( 
    <BrowserRouter>
        <Routes>
            <Route element={<AppShell {...theme}/>}>
              {/* to be added later, should come here when the user is logged */}
              <Route path="/signin" element={<Signin />} />

            </Route>
            <Route element={<SignupShell {...theme} />}>
              {/* Render SignupOptions component as a child */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/signupoptions" element={<SignupOptions />} />
            </Route>
        </Routes>
    </BrowserRouter>
  ) 
};

export default App;