import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App';
// import Auth from './Auth/pages/auth';
// import AdminPanel from './AdminPanel/AdminPanel';
// import ReviewEditPage from './ReviewEdit/pages/ReviewEditPage';
// import HomePage from './Home/pages/HomePage';
// import ErrorPage from './Error/pages/ErrorPage';
// import MemberPanelLayout from './MemberPanel/pages/MemberPanelLayout';
// import ReviewCommentHistory from './MemberPanel/pages/ReviewCommentHistory';
// import ChangeInfo from './MemberPanel/pages/ChangeInfo';
// import ChangePassword from './MemberPanel/pages/ChangePassword';
// import UploadProfilePic from './MemberPanel/pages/UploadProfilePic';
// import WishList from './MemberPanel/pages/WishList';
// import GameSearchResult from './GameSearchResult/GameSearchResultPage';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />, //Layout (Navbar & Footer)
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: 'adminPanel',
//         element: <AdminPanel />,
//       },
//       {
//         path: 'game/:id',
//         children: [
//           {
//             index: true,
//             element: <h1>Insert game page here</h1>,
//           },
//           {
//             path: 'reviewEdit',
//             element: <ReviewEditPage />,
//           },
//         ],
//       },
//       {
//         path: 'search',
//         children: [
//           {
//             index: true,
//             element: <GameSearchResult />,
//           },
//         ],
//       },
//       {
//         path: 'member/:uid',
//         element: <MemberPanelLayout />,
//         children: [
//           {
//             index: true,
//             element: <ReviewCommentHistory />,
//           },
//           {
//             path: 'change-info',
//             element: <ChangeInfo />,
//           },
//           {
//             path: 'change-password',
//             element: <ChangePassword />,
//           },
//           {
//             path: 'upload-profile-pic',
//             element: <UploadProfilePic />,
//           },
//           {
//             path: 'wishlist',
//             element: <WishList />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
