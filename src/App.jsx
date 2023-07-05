import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Container } from '@mui/material';
import Auth from './Auth/pages/auth';
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
import AboutUs from './AboutUs/AboutUs';
import AffReg from './Affiliation/AffReg';
import AffSuc from './Affiliation/AffSuc';
import AffRule from './Affiliation/AffRule';
import PublicProfileLayout from './PublicProfile/pages/PublicProfileLayout';
import AddGamePage from './AdminPanel/AddGamePage';
import { AuthContext } from './shared/context/auth_context';
import { AffRegContext } from './shared/context/AffRegContext';
import GamePage from './Game/GamePage';
import ReviewPage from './Review/ReviewPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isAffRegistered, setIsAffRegistered] = useState(false);

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

  const affregister = useCallback(() => {
    setIsAffRegistered(true);
  }, []);

  let routes;

  {
    isAdminLoggedIn &&
      (routes = (
        <Routes>
          <Route path='*' element={<ErrorPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />

          {/* Game Route */}
          <Route path='/game'>
            <Route index element={<GameSearchResult />} />
            <Route path=':id'>
              <Route index element={<GamePage />} />
              <Route path='review-edit' element={<ReviewEditPage />} />
              <Route path='review/:rid' element={<ReviewPage />} />
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

          {/* Affiliation Route */}
          <Route path='/affiliation-registration' element={<AffReg />} />
          <Route path='/affiliation-rule' element={<AffRule />} />
          <Route path='/affiliation-suc' element={<AffSuc />} />

          {/* Admin Route */}
          <Route path='/admin-panel' element={<AdminPanel />} />
          <Route path='/auth' element={<Navigate to='/admin-panel' />} />
          <Route path='/add-game' element={<AddGamePage />} />
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
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />

          {/* Game Route */}
          <Route path='/game'>
            <Route index element={<GameSearchResult />} />
            <Route path=':id'>
              <Route index element={<GamePage />} />
              <Route path='review-edit' element={<ReviewEditPage />} />
              <Route path='review/:rid' element={<ReviewPage />} />
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

          {/* Affiliation Route */}
          {isAffRegistered &&
            (routes = <Route path='/affiliation-registration' element={<AffSuc />} />)}
          <Route path='/affiliation-registration' element={<AffReg />} />
          <Route path='/affiliation-rule' element={<AffRule />} />

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
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />

          {/* Auth Route */}
          <Route path='/auth'>
            <Route index element={<Auth />} />
            <Route path='forget-password' element={<ForgetPassword />} />
            <Route path='reset-password' element={<ResetPassword />} />
          </Route>

          {/* Game Route */}
          <Route path='/game'>
            <Route index element={<GameSearchResult />} />
            <Route path=':id'>
              <Route index element={<GamePage />} />
              <Route path='review-edit' element={<ReviewEditPage />} />
              <Route path='review/:rid' element={<ReviewPage />} />
            </Route>
          </Route>

          {/* Member Profile Route */}
          <Route path='/profile/:uid' element={<PublicProfileLayout />}>
            <Route index element={<ReviewCommentHistory />} />
            <Route path='wishlist' element={<WishList />} />
          </Route>

          {/* Member Route */}
          <Route path='/member/*' element={<Navigate to='/auth' replace />} />

          {/* Affiliation Route */}
          <Route path='/affiliation-rule' element={<AffRule />} />
          <Route path='/affiliation-registration' element={<Navigate to='/auth' replace />} />
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
      <AffRegContext.Provider
        value={{
          isAffRegistered: isAffRegistered,
          affregister: affregister,
        }}
      >
        <Router>
          <Navbar />
          <Container>
            <main>{routes}</main>
          </Container>
          <Footer />
        </Router>
      </AffRegContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
