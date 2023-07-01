import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, redirect } from 'react-router-dom';

import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Container } from '@mui/material';
import Auth from './Auth/pages/auth';
import AdminPanel from './AdminPanel/AdminPanel';
import ReviewEditPage from './ReviewEdit/pages/ReviewEditPage';
import HomePage from './Home/pages/HomePage';
import ErrorPage from './Error/pages/ErrorPage';
import MemberPanelLayout from './MemberPanel/pages/MemberPanelLayout';
import ReviewCommentHistory from './MemberPanel/pages/ReviewCommentHistory';
import ChangeInfo from './MemberPanel/pages/ChangeInfo';
import ResetPassword from './MemberPanel/pages/ResetPassword';
import UploadProfilePic from './MemberPanel/pages/UploadProfilePic';
import WishList from './MemberPanel/pages/WishList';
import GameSearchResult from './GameSearchResult/GameSearchResultPage';
import ContactUs from './ContactUs/ContactUs';
import AffReg from './Affiliation/AffReg';
import { AuthContext } from './shared/context/auth_context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const adminLogin = useCallback(() => {
    setIsAdminLoggedIn(true);
  }, []);

  const adminLogout = useCallback(() => {
    setIsAdminLoggedIn(false);
  }, []);

  let routes;

  {
    isAdminLoggedIn &&
      (routes = (
        <Routes>
          <Route path='/admin-panel' element={<AdminPanel />} />
          <Route path='/auth' element={<Navigate to='/admin-panel' />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' />
          <Route path='/contact-us' element={<ContactUs />} />

          {/* Game Route */}
          <Route path='/game'>
            <Route index element={<h1>All Game Page</h1>} />
            <Route path=':id'>
              <Route index element={<h1>Individual game page here</h1>} />
              <Route path='review-edit' element={<ReviewEditPage />} />
            </Route>
          </Route>
        </Routes>
      ));
  }
  {
    isLoggedIn &&
      (routes = (
        <Routes>
          <Route path='*' element={<ErrorPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<Navigate to='/' replace />} />
          <Route path='/search' element={<GameSearchResult />} />
          <Route path='/about-us' />
          <Route path='/contact-us' element={<ContactUs />} />

          {/* Game Route */}
          <Route path='/game'>
            <Route index element={<h1>All Game Page</h1>} />
            <Route path=':id'>
              <Route index element={<h1>Individual game page here</h1>} />
              <Route path='review-edit' element={<ReviewEditPage />} />
            </Route>
          </Route>

          {/* Member Route */}
          <Route path='/member/:uid' element={<MemberPanelLayout />}>
            <Route index element={<ReviewCommentHistory />} />
            <Route path='change-info' element={<ChangeInfo />} />
            <Route path='reset-password' element={<ResetPassword />} />
            <Route path='upload-profile-pic' element={<UploadProfilePic />} />
            <Route path='wishlist' element={<WishList />} />
          </Route>
        </Routes>
      ));
  }
  {
    !isLoggedIn &&
      !isAdminLoggedIn &&
      (routes = (
        <Routes>
          <Route path='*' element={<ErrorPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/member/*' element={<Navigate to='/auth' replace />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/search' element={<GameSearchResult />} />
          <Route path='/about-us' />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/affiliation' element={<AffReg />} />

          {/* Game Route */}
          <Route path='/game'>
            <Route index element={<h1>All Game Page</h1>} />
            <Route path=':id'>
              <Route index element={<h1>Individual game page here</h1>} />
              <Route path='review-edit' element={<ReviewEditPage />} />
            </Route>
          </Route>
        </Routes>
      ));
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        isAdminLoggedIn: isAdminLoggedIn,
        login: login,
        logout: logout,
        adminLogin: adminLogin,
        adminLogout: adminLogout,
      }}
    >
      <Router>
        <Navbar />
        <Container>
          <main>{routes}</main>
        </Container>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
