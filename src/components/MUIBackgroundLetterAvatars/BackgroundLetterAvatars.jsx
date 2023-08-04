import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  const nameParts = name.split(' ');
  const firstNameInitial = nameParts[0][0];
  const lastNameInitial = nameParts[1] ? nameParts[1][0] : '';

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${firstNameInitial}${lastNameInitial}`,
  };
}

function BackgroundLetterAvatars({contact}) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar(contact.name)} />      
    </Stack>
  );
}

BackgroundLetterAvatars.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default BackgroundLetterAvatars;