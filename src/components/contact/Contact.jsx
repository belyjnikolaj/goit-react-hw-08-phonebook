import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { deleteContact } from 'redux/operations';
import BackgroundLetterAvatars from 'components/MUIBackgroundLetterAvatars';
import { Fab, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CallIcon from '@mui/icons-material/Call';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import BasicModal from 'components/MUIModalChange/ModalChange';


const Contact = ({ contact }) => {
  const dispatch = useDispatch();  
  const [expanded, setExpanded] = useState(false);

  const handleCall = () => {
    window.location.href = `tel:${contact.number}`;
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (


    <li className={css['contact__item']} key={contact.id}>
      <Accordion className={css.accordion}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        style={{          
          width: '100%',
        }}

      >
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{
            width: '100%', display: 'flex',
            alignItems: 'center',
            flexDirection: 'row', }}
        >
          <BackgroundLetterAvatars contact={contact} />
          <Typography sx={{ width: '100%', flexShrink: 0, alignItems: 'center', display: 'flex', padding: '0 10px'  }}>
            {contact.name} {contact.number}
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails style={{ alignItems: 'center', display: 'flex', padding: '0 10px' }}>          
          <Stack direction="row" spacing={2}>
            <Fab
              onClick={handleCall}
              color="primary"
              aria-label="call"
              style={{
                width: '40px',
                height: '40px',
              }}
            >
              <CallIcon />
            </Fab>
            <Fab
              style={{
                backgroundColor: '#fff',
                color: '#5D4037',
                width: '40px',
                height: '40px',
              }}
              aria-label="delete"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              <DeleteIcon />
            </Fab>
            <BasicModal contact={contact} />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </li>
  )
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,  
};

export default Contact;