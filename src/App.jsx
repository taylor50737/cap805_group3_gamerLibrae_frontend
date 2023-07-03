import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Container } from '@mui/material';
import Auth from './Auth/pages/Auth';
import ForgetPassword from './Auth/pages/ForgetPassword';
import ResetPassword from './Auth/pages/ResetPassword';
import AdminPanel from './AdminPanel/AdminPanel';
import ReviewEditPage from './ReviewEdit/pages/ReviewEditPage';
import HomePage from './Home/pages/HomePage';
import ErrorPage from './Error/pages/ErrorPage';
import MemberPanelLayout from './MemberPanel/pages/MemberPanelLayout';
import ReviewCommentHistory from './MemberPanel/pages/ReviewCommentHistory';
import ChangeInfo from './MemberPanel/pages/ChangeInfo';
import ChangePassword from './MemberPanel/pages/ChangePassword';
import UploadProfilePic from './MemberPanel/pages/UploadProfilePic';
import WishList from './MemberPanel/pages/WishList';
import GameSearchResult from './GameSearchResult/GameSearchResultPage';
import ContactUs from './ContactUs/ContactUs';
import AffReg from './Affiliation/AffReg';
import PublicProfileLayout from './PublicProfile/pages/PublicProfileLayout';
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

          {/* Member Profile Route */}
          <Route path='/profile/:uid' element={<PublicProfileLayout />}>
            <Route index element={<ReviewCommentHistory />} />
            <Route path='wishlist' element={<WishList />} />
          </Route>

          {/* Member Route */}
          <Route path='/member/:uid' element={<MemberPanelLayout />}>
            <Route index element={<ReviewCommentHistory />} />
            <Route path='change-info' element={<ChangeInfo />} />
            <Route path='wishlist' element={<WishList />} />
            <Route path='change-password' element={<ChangePassword />} />
            <Route path='upload-profile-pic' element={<UploadProfilePic />} />
          </Route>

          {/* Admin Route */}
          <Route path='/admin-panel' element={<AdminPanel />} />
          <Route path='/auth' element={<Navigate to='/admin-panel' />} />
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

          {/* Member Profile Route */}
          <Route path='/profile/:uid' element={<PublicProfileLayout />}>
            <Route index element={<ReviewCommentHistory />} />
            <Route path='wishlist' element={<WishList />} />
          </Route>

          {/* Member Route */}
          <Route path='/member/:uid' element={<MemberPanelLayout />}>
            <Route index element={<ReviewCommentHistory />} />
            <Route path='wishlist' element={<WishList />} />
            <Route path='change-info' element={<ChangeInfo />} />
            <Route path='change-password' element={<ChangePassword />} />
            <Route path='upload-profile-pic' element={<UploadProfilePic />} />
          </Route>

          {/* Admin Route */}
          <Route path='/admin-panel/*' element={<Navigate to='/auth' />} />
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

          <Route path='/search' element={<GameSearchResult />} />
          <Route path='/about-us' />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/affiliation-registration' element={<AffReg />} />

          {/* Auth Route */}
          <Route path='/auth'>
            <Route index element={<Auth />} />
            <Route path='forget-password' element={<ForgetPassword />} />
            <Route path='reset-password' element={<ResetPassword />} />
          </Route>

          {/* Game Route */}
          <Route path='/game'>
            <Route index element={<h1>All Game Page</h1>} />
            <Route path=':id'>
              <Route index element={<h1>Individual game page here</h1>} />
              <Route path='review-edit' element={<ReviewEditPage />} />
            </Route>
          </Route>

          {/* Member Profile Route */}
          <Route path='/profile/:uid' element={<PublicProfileLayout />}>
            <Route index element={<ReviewCommentHistory />} />
            <Route path='wishlist' element={<WishList />} />
          </Route>

          {/* Member Route */}
          <Route path='/member/*' element={<Navigate to='/auth' replace />} />

          {/* Admin Route */}
          <Route path='/admin-panel/*' element={<Navigate to='/auth' replace />} />
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
