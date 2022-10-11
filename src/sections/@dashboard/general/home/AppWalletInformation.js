import PropTypes from 'prop-types';
import { useState } from 'react';
import QRCode from 'react-qr-code';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Tooltip, IconButton, Grid, Divider, Button } from '@mui/material';
import CopyClipboard from '../../../../components/CopyClipboardQR';
// ----------------------------------------------------------------------
import Iconify from '../../../../components/Iconify';
import tronIcon from '../../../../assets/icons/ic_tron.svg';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  '& .slick-list': {
    borderRadius: Number(theme.shape.borderRadius) * 2,
  },
}));

const CardItemStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundSize: 'cover',
  padding: theme.spacing(3),
  backgroundRepeat: 'no-repeat',
  color: theme.palette.common.white,
}));

const shadowStyle = {
  mx: 'auto',
  width: 'calc(100% - 16px)',
  zIndex: 8,
  bgcolor: 'grey.500',
  background: 'linear-gradient(120deg, #3366FF 0%, #04297A 70%)',
  boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 12px 24px -4px rgba(0, 0, 0, 0.12)',
  borderRadius: '16px',
};

const qrDesriptionbox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  paddingLeft: '6%',
  width: '-webkit-fill-available',
};

const eyeButton = {
  position: 'absolute',
  top: '20px',
  right: '20px',
};

// ----------------------------------------------------------------------

AppWalletInformation.propTypes = {
  tron: PropTypes.object.isRequired,
  sx: PropTypes.object,
};

export default function AppWalletInformation({ tron, sx }) {
  const theme = useTheme();
  return (
    <RootStyle sx={sx}>
      <Box sx={{ ...shadowStyle }}>
        <CardItem card={tron} />
      </Box>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

CardItem.propTypes = {
  card: PropTypes.object.isRequired,
};

function CardItem({ card }) {
  const { balance, currency, address } = card;
  const [show, setShow] = useState(true);
  return (
    <CardItemStyle>
      <Tooltip title="Show">
        <IconButton sx={eyeButton} onClick={() => setShow(!show)}>
          <Iconify icon={'eva:eye-fill'} width={24} height={24} />
        </IconButton>
      </Tooltip>
      <Grid>
      <Box sx={{display:'flex', direction:'row'}} >
      <Box>
        <QRCode value={address} size={120} bgColor="#ffffff00" fgColor="#fff" level="L" />
      </Box>
      <Box sx={qrDesriptionbox}>
        <p
          style={{
            /* H3 */
            fontFamily: 'Public Sans',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '25px',
            color: ' #FFFFFF',
          }}
        >
          {show ? balance / 1000000 : '******'} {currency.value}
        </p>
        <p
          style={{
            fontFamily: 'Public Sans',
            fontSize: '15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <img
            alt="trinicon"
            width="8%"
            src={tronIcon}
            style={{
              marginRight: '2%',
            }}
          />
          {currency.value} {currency.label}
        </p>
        <p
          style={{
            fontFamily: 'Public Sans',
            fontSize: '15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
            <Iconify sx={{mr:1}} icon={'bx:trending-up'} width={25} height={25} />
          + {show ? balance / 1000000 : '******'} %
        </p>
      </Box>
      </Box>
      <Divider sx={{my:2}} />
      <Grid container direction={'row'} justifyContent={'space-between'}>
        <Box>
      <CopyClipboard value={address} show={show} />
      </Box>
      <Button variant='text' sx={{color:'white'}} >View All </Button>
      </Grid>
      </Grid>
    </CardItemStyle>
  );
}

// ----------------------------------------------------------------------
