import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import { Fab } from '@mui/material';
import ContactForm from 'components/contactForm/ContactForm';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function BasicModal({ contact }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Fab
                color="secondary"
                aria-label="edit"
                onClick={handleOpen}
                style={{
                    width: '40px',
                    height: '40px',
                }}
            >
                <EditIcon />
            </Fab>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"                
            >
                <Box sx={style} >
                    <ContactForm contact={contact} onClose={handleClose}/>
                </Box>
            </Modal>
        </div>
    );
}
BasicModal.propTypes = {
    contact: PropTypes.object.isRequired, 
};

export default BasicModal;
