import { Route, Routes } from "react-router-dom";
import Menubar from "./components/MenuBar/Menubar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Explore from "./pages/Explore/Explore";
import ManageCategory from "./pages/ManageCategory/ManageCategory";
import ManageItems from "./pages/ManageItems/ManageItems";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/category" element={<ManageCategory />} />
        <Route path="/items" element={<ManageItems />} />
        <Route path="/users" element={<ManageUsers />} />
      </Routes>
    </div>
  );
}

export default App;
