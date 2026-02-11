import { useEffect, useState } from 'react';
import UserForm from '../../components/UserForm/UserForm';
import UserList from '../../components/UserList/UserList';
import './ManageUsers.css';
import toast from 'react-hot-toast';
import { fetchUsers } from '../../service/UserService';

const ManageUsers = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ MOVE THIS OUTSIDE useEffect
  const loadUsers = async () => {
    try {
      setLoading(true);
      const response = await fetchUsers();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Unable to fetch users");
    } finally {
      setLoading(false);
    }
  };

  // ✅ CALL IT HERE
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="users-container text-light">
      <div className="left-column">
        {/* form for user */}
        <UserForm setUsers={setUsers} reloadUsers={loadUsers} />
      </div>

      <div className="right-column">
        {/* list of users */}
        <UserList users={users} setUsers={setUsers} />
      </div>
    </div>
  )
}

export default ManageUsers;
