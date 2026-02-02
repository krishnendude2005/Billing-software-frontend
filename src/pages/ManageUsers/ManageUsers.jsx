import UserForm from '../../components/UserForm/UserForm';
import UserList from '../../components/UserList/UserList';
import './ManageUsers.css';

const ManageUsers = () => {
  return (
    <div className="users-container text-light">
      <div className="left-column">
        {/* form for user */}
       <UserForm />
      </div>

      <div className="right-column">
        {/* list of users */}
        <UserList />
      </div>
    </div>
  )
}
export default ManageUsers;