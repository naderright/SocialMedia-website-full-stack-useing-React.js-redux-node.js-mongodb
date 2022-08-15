import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = (user) => {
    console.log(user?'nader':"ahme");
    user ? <Outlet /> : <Navigate to='/auth' replace={true} />
  }

  export default ProtectRoute;