import Login from 'routes/SignIn';
import SignUp from 'routes/SignUp';
// import LandingPage from 'routes/LandingPage';

export default [
  {
    path: "/sign-in",
    component: Login
  },
  {
    path: "/sign-up",
    component: SignUp
  },
];
