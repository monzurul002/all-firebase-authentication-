import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import EmaiVerify from "../pages/EmailVerify/EmaiVerify";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    
    children: [
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: '/details',
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
      },


    ]
  },
  {path: '/verify',
    element: <EmaiVerify></EmaiVerify>}
]);
export default router;