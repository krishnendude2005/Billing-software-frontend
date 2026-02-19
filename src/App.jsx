import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Menubar from "./components/MenuBar/Menubar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Explore from "./pages/Explore/Explore";
import ManageCategory from "./pages/ManageCategory/ManageCategory";
import ManageItems from "./pages/ManageItems/ManageItems";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login/Login";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import { useContext } from "react";
import NotFound from "./pages/NotFound/NotFound";
import { AppContext } from "./context/AppContext";

function App() {
  const location = useLocation();

  const { auth } = useContext(AppContext);



  const LoginRoute = ({ element }) => {
    if (auth.token) {
      return <Navigate to="/dashboard" />
    }
    return element;
  }

  const ProtectedRoute = ({ element, allowedRoles }) => {
    if (!auth.token) {
      return <Navigate to="/login" />
    }
    if (allowedRoles && !allowedRoles.includes(auth.role)) {
      return <Navigate to="/dashboard" />
    }

    return element;
  }

  return (
    <div>
      {location.pathname !== '/login' && <Menubar />}
      <Toaster />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<Explore />} />


        {/* ADMIN ONLY ROUTES */}
        <Route path="/category" element={<ProtectedRoute element={<ManageCategory />} allowedRoles={['ROLE_ADMIN']} />} />
        <Route path="/items" element={<ProtectedRoute element={<ManageItems />} allowedRoles={['ROLE_ADMIN']} />} />
        <Route path="/users" element={<ProtectedRoute element={<ManageUsers />} allowedRoles={['ROLE_ADMIN']} />} />


        <Route path="/login" element={<LoginRoute element={<Login />} />} />
        <Route path="/orders" element={<OrderHistory />} />

        {/* WILD-CARD ROUTE */}
        <Route path="/*" element={<NotFound />} />


      </Routes>
    </div>
  );
}

export default App;
