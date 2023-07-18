import { Container } from '@mui/material';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Route,
  defer,
} from 'react-router-dom';

import Navbar from './shared/components/layout/Navbar';
import Footer from './shared/components/layout/Footer';
import Auth from './Auth/pages/auth';
import ForgotPassword from './Auth/pages/ForgotPassword';
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
import GamePage from './Game/GamePage';
import ReviewPage from './Review/ReviewPage';

import AuthProvider from './shared/context/AuthProvider';
import ProtectedRoute from './shared/components/route/ProtectedRoute';
import LoaderTest from './Loader/LoaderTest';
import DeferredLoaderTest from './Loader/DeferredLoaderTest';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // Layout route
      <Route
        element={
          <AuthProvider>
            <Navbar />
            <Container>
              <Outlet />
            </Container>
            <Footer />
          </AuthProvider>
        }
      >
        {/* General */}
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='search' element={<GameSearchResult />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='contact-us' element={<ContactUs />} />

        {/* Authentication */}
        <Route
          path='auth'
          element={<ProtectedRoute required={{ loggedIn: false }} redirectPath='/' />}
        >
          <Route index element={<Auth />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='reset-password' element={<ResetPassword />} />
        </Route>

        {/* Game Route */}
        <Route path='game'>
          <Route index element={<GameSearchResult />} />
          <Route path=':id'>
            <Route index element={<GamePage />} />
            <Route path='review/:rid' element={<ReviewPage />} />
            <Route
              path='review-edit'
              element={
                <ProtectedRoute required={{ loggedIn: true }}>
                  <ReviewEditPage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>

        {/* Member Profile Route */}
        <Route path='profile/:uid' element={<PublicProfileLayout />}>
          <Route index element={<ReviewCommentHistory />} />
          <Route path='wishlist' element={<WishList />} />
        </Route>

        {/* Member Route */}
        <Route
          path='member/:uid'
          element={
            <ProtectedRoute required={{ loggedIn: true }}>
              <MemberPanelLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<ReviewCommentHistory />} />
          <Route path='wishlist' element={<WishList />} />
          <Route path='change-info' element={<ChangeInfo />} />
          <Route path='change-password' element={<ChangePassword />} />
          <Route path='upload-profile-pic' element={<UploadProfilePic />} />
        </Route>

        {/* Affiliation */}
        <Route path='affiliation-rule' element={<AffRule />} />
        <Route
          path='affiliation-registration'
          element={
            <ProtectedRoute required={{ loggedIn: true }}>
              <AffReg />
            </ProtectedRoute>
          }
        />
        <Route
          path='affiliation-suc'
          element={
            <ProtectedRoute required={{ loggedIn: true, affiliation: true }}>
              <AffSuc />
            </ProtectedRoute>
          }
        />

        {/* Admin Route */}
        <Route
          path='admin-panel'
          element={
            <ProtectedRoute required={{ loggedIn: true, admin: true }}>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
        <Route
          path='add-game'
          element={
            <ProtectedRoute required={{ loggedIn: true, admin: true }}>
              <AddGamePage />
            </ProtectedRoute>
          }
        />

        {/* Test loader API */}
        <Route
          path='loader-test'
          element={<LoaderTest />}
          loader={async () => {
            const res = await fetch('http://localhost:8080/api/users', {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            });
            const data = await res.json();

            // artificial delay
            const delay = (ms) => new Promise((res) => setTimeout(res, ms));
            await delay(1500);

            return { data };
          }}
        />

        <Route
          path='deferred-loader-test'
          element={<DeferredLoaderTest />}
          loader={async () => {
            const promise = fetch('http://localhost:8080/api/users', {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            }).then(
              (res) =>
                new Promise((resolve) => {
                  setTimeout(() => resolve(res.json()), 2000); // fake delay
                }),
            );
            return defer({
              promise: promise,
            });
          }}
        />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
