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
  width: '90%',
  borderRadius: 2,
  height: '75%',
  zIndex: 8,
  padding: '6.7%',
  background: 'rgba(22, 28, 36, 0.5)',
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
};
const title = {
  fontFamily: 'Public Sans',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '22px',
  color: '#FFFFFF',
  mixBlendMode: 'normal',
  opacity: 0.72,
  width: '90%',
};
const linkTronScan = {
  textDecoration: 'none',

  height: '36px',

  background: '#7524AF',
  boxShadow: '0px 8px 16px rgba(117, 36, 175, 0.25)',
  borderRadius: '8px',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
// ----------------------------------------------------------------------

TronNavigation.propTypes = {
  link: PropTypes.string.isRequired,
  logout: PropTypes.string.isRequired,
};

export default function TronNavigation({ link, handleLogout }) {
  const theme = useTheme();
  return (
    <CardItemStyle>
      <Card sx={{ ...cardStyle }}>
        <h2 style={title}>TRONSCAN</h2>
        <h5 style={title}>Transction Movements History</h5>
        <p
          style={{
            fontFamily: 'Public Sans',
            fontStyle: 'normal',
            fontHeight: 500,
            fontSize: '14px',
            lineHeight: '22px',
            width: '90%',
            textAlign: 'justify',
            textJustify: 'inter-word',
            inlineSize: '90%',
            overflowWrap: 'break-word',
          }}
        >
          {link}
        </p>
        <a style={linkTronScan} href={link} target="_blank" rel="noreferrer">
          Open Tronscan
        </a>
      </Card>
      <Button
        onClick={handleLogout}
        sx={{ background: '#0C53B7', borderRadius: '8px', height: '18%', width: '90%' }}
        variant="contained"
      >
        Sign out
      </Button>
    </CardItemStyle>
  );
}
