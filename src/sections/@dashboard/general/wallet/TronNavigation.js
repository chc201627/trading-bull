import PropTypes from 'prop-types';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Card, Button } from '@mui/material';

import background from '../../../../assets/images/photos/link-tron.svg';
import useLocales from '../../../../hooks/useLocales';

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
};
const title = {
  fontFamily: 'Public Sans',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '22px',
  color: '#FFFFFF',
  mixBlendMode: 'normal',
  width: '90%',
  opacity: '0.72',
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
const linkStyle = {
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
  zIndex: 9,
};
// ----------------------------------------------------------------------

TronNavigation.propTypes = {
  link: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default function TronNavigation({ link, handleLogout }) {
  const { translate } = useLocales();

  return (
    <CardItemStyle>
      <Card sx={{ ...cardStyle }}>
        <img
          alt="trinicon"
          src={background}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: 'auto',
          }}
        />
        <div
          style={{
            position: 'relative',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(22, 28, 36,0.8)',
            borderRadius: 2,
            padding: '6.7%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <h2 style={title}>TRONSCAN</h2>
          <h5 style={title}> {translate('wallet.navigation.history')}</h5>
          <p style={linkStyle}>{link}</p>
          <a style={linkTronScan} href={link} target="_blank" rel="noreferrer">
            {translate('wallet.navigation.openButton')}
          </a>{' '}
        </div>
      </Card>
      <Button
        onClick={handleLogout}
        sx={{ background: '#0C53B7', borderRadius: '8px', height: '18%', width: '90%' }}
        variant="contained"
      >
        {translate('wallet.navigation.signOut')}
      </Button>
    </CardItemStyle>
  );
}
