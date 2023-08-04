import UserMenu from 'components/userMenu';
import Navigation from 'components/navigation';
import AuthNav from 'components/authNav';
import useAuth from 'hooks';
import AppBar from '@mui/material/AppBar';

const Header = () => {
    const { isLoggedIn } = useAuth();
    
    return (
      <AppBar position="static" style={{ height: '50px', width: '100%', backgroundColor: '#5D4037', flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-between'}} >
        <Navigation />
        {isLoggedIn ? <UserMenu style={{ flexGrow: 1 }} /> : <AuthNav style={{ flexGrow: 1 }}/>}
      </AppBar>
  );
}

export default Header