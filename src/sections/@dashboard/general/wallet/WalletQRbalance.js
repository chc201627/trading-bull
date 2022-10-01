import PropTypes from 'prop-types';
import { useState } from 'react';
import QRCode from 'react-qr-code';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Tooltip, IconButton } from '@mui/material';
import CopyClipboard from '../../../../components/CopyClipboardQR';
// ----------------------------------------------------------------------
import Iconify from '../../../../components/Iconify';
import tronIcon from '../../../../assets/icons/ic_tron.svg';

const HEIGHT = '100%';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  height: HEIGHT,
  '& .slick-list': {
    borderRadius: Number(theme.shape.borderRadius) * 2,
  },
}));

const CardItemStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  height: HEIGHT - 16,
  backgroundSize: 'cover',
  padding: theme.spacing(6),
  backgroundRepeat: 'no-repeat',
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
}));

const shadowStyle = {
  mx: 'auto',
  width: 'calc(100% - 16px)',
  height: HEIGHT,
  zIndex: 8,
  bgcolor: 'grey.500',
  background: 'linear-gradient(135deg, #A964DA 0%, #631E94 100%)',
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

WalletQRbalance.propTypes = {
  tron: PropTypes.object.isRequired,
  sx: PropTypes.object,
};

export default function WalletQRbalance({ tron, sx }) {
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
  const [show, setShow] = useState(false);
  return (
    <CardItemStyle>
      <Tooltip title="Show">
        <IconButton sx={eyeButton} onClick={() => setShow(!show)}>
          <Iconify icon={'eva:eye-fill'} width={24} height={24} />
        </IconButton>
      </Tooltip>
      <Box>
        <QRCode value={address} size={250} bgColor="transparent" fgColor="#000" level="L" />
      </Box>
      <Box sx={qrDesriptionbox}>
        <p
          style={{
            /* H3 */

            fontFamily: 'Public Sans',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '48px',

            color: ' #FFFFFF',
          }}
        >
          {show ? balance : '******'} {currency.value}
        </p>
        <span
          style={{
            fontFamily: 'Public Sans',
            fontStyle: 'normal',
            fontHeight: 700,
            fontSize: '20px',
            lineHeight: '30px',
            color: '#FFFFFF',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <img
            alt="trinicon"
            width="5%"
            src={tronIcon}
            style={{
              marginRight: '2%',
            }}
          />
          {currency.value} {currency.label}
        </span>

        <CopyClipboard value={address} show={show} />
      </Box>
    </CardItemStyle>
  );
}

// ----------------------------------------------------------------------
