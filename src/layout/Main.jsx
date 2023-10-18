import { Outlet } from "react-router-dom";
import Header from "../pages/Header/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Loading from "../pages/Loading/Loading";


const Main = () => {
   const {loading}=useContext(AuthContext);
   if(loading){
    return <Loading></Loading>
   }
    return (
        <div>
            <Header></Header>
           <Outlet></Outlet> 
           <ToastContainer />
        </div>
    );
};

export default Main;