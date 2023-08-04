import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import useAuth from 'hooks';
import css from './UserMenu.module.css';
import { Button } from '@mui/material';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button
        variant="contained"
        onClick={handleLogOut}
        style={{
          borderRadius: '60%',
          backgroundColor: '#f57c00',
          marginRight: '10px'
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu