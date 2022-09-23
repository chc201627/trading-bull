import PropTypes from 'prop-types';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Card, Button } from '@mui/material';

import background from '../../../../assets/images/photos/link-tron.svg';

// ----------------------------------------------------------------------

const CardItemStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
}));
const cardStyle = {
  width: '100%',
  borderRadius: 2,
  height: '21vh',
  zIndex: 8,

  background: 'rgba(22, 28, 36, 0.8)',
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};
// ----------------------------------------------------------------------

TronNavigation.propTypes = {
  link: PropTypes.string.isRequired,
  logout: PropTypes.string.isRequired,
};

export default function TronNavigation({ link, logout }) {
  const theme = useTheme();
  console.log(link, logout);
  return (
    <CardItemStyle>
      <Card sx={{ ...cardStyle }}>
        <Box sx={{ position: 'absolute', top: 20, left: 20, zIndex: 9 }}>
          <button>open</button>
        </Box>{' '}
      </Card>
      <Button sx={{ background: '#0C53B7', borderRadius: '8px', height: '6vh' }} variant="contained">
        Sign out
      </Button>
    </CardItemStyle>
  );
}
