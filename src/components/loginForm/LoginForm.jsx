import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import HttpsIcon from '@mui/icons-material/Https';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5D4037',
    },
  }
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <ThemeProvider theme={theme}>
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MailOutlineSharpIcon />
              </InputAdornment>
            ),
          }}
          type="email"
          name="email"
          label="Email"
          fullWidth
          color="primary"
          id="outlined-textarea"
          placeholder="Enter email"
          autoComplete="email"
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  style={{ marginRight: '5px' }} // Встановлюємо відступ зліва в 8 пікселів
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                <HttpsIcon />
              </InputAdornment>
            }
            label="Password"
            name="password"
            fullWidth
            color="primary"
            placeholder="Enter password"
            autoComplete="current-password"
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          color="primary"
        >
          Log In
        </Button>
      </ThemeProvider>
    </form>
  );
};
export default LoginForm;