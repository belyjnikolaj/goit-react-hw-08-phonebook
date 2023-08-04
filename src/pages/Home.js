import CallIcon from '@mui/icons-material/Call';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Typography } from '@mui/material';
const styles = {
  container: {
    height: 'calc(100vh - 50px)',
    display: 'flex',
    width: '100%',
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    justifyContent: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <div
        style={{
          display: 'flex',
          paddingTop: '2rem',
          width: '50rem',
          backgroundColor: '#f57c00',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h2"
          component="div"
          style={{
            color: '#5D4037',
            fontWeight: '700',
            fontSize: '3.13vw',
            textAlign: 'right',
            borderColor: '#fff',
            borderWidth: '6px 0 6px',
            borderStyle: 'solid',
            borderRadius: '60% 0 0 60%',
          }}
        >
          Phone
        </Typography>
        <CallIcon
          style={{
            alignItems: 'center',
            width: '80%',
            height: '80%',
            color: '#5D4037',
            margin: 'auto',
            padding: '0',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50rem',
          paddingTop: '2rem',       
        }}
      >
        <Typography
          variant="h2"
          component="div"
          style={{
            color: '#f57c00',
            fontWeight: '700',
            fontSize: '3.13vw',
            textAlign: 'left',
            borderColor: '#f57c00',
            borderWidth: '6px 0 6px',
            borderStyle: 'solid',
            borderRadius: '0 60% 60% 0',
          }}
        >
          Book
        </Typography>
        <MenuBookIcon
          style={{
            color: '#f57c00',
            width: '80%',
            height: '80%',            
            alignItems: 'center',
            margin: 'auto',
            padding: '0',
          }}
        />
      </div>
    </div>
  );
}
