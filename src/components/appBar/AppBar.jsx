
import UserMenu from 'components/userMenu';
import css from './AppBar.module.css'
import Navigation from 'components/navigation';
import AuthNav from 'components/authNav';
import useAuth from 'hooks';

const AppBar = () => {
    const { isLoggedIn } = useAuth();
    // console.log(isLoggedIn);
    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    )
}

export default AppBar