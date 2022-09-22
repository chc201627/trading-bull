import PropTypes from 'prop-types';
import { useState } from 'react';
import QRCode from 'react-qr-code';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Typography, Stack, MenuItem, IconButton } from '@mui/material';

// ----------------------------------------------------------------------

const HEIGHT = 276;

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
  padding: theme.spacing(3),
  backgroundRepeat: 'no-repeat',
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const shadowStyle = {
  mx: 'auto',
  width: 'calc(100% - 16px)',
  position: 'absolute',
  height: HEIGHT,
  zIndex: 8,
  bottom: 8,
  left: 0,
  right: 0,
  bgcolor: 'grey.500',
  background: 'linear-gradient(135deg, #A964DA 0%, #631E94 100%)',
  /* 01 Shadows/Dark/zCard */

  boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 12px 24px -4px rgba(0, 0, 0, 0.12)',
  borderRadius: '16px',
};

// ----------------------------------------------------------------------

WalletQRbalance.propTypes = {
  list: PropTypes.array.isRequired,
  sx: PropTypes.object,
};

export default function WalletQRbalance({ list, sx }) {
  const theme = useTheme();
  console.log(list);
  return (
    <RootStyle sx={sx}>
      <Box sx={{ ...shadowStyle }}>
        <CardItem key={list[0].id} card={list[0]} />
      </Box>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

CardItem.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string,
    balance: PropTypes.number,
    cardHolder: PropTypes.string,
    cardNumber: PropTypes.string,
    cardType: PropTypes.string,
    cardValid: PropTypes.string,
  }),
};

function CardItem({ card }) {
  const { id, cardType, balance, cardHolder, cardNumber, cardValid } = card;

  const [open, setOpen] = useState(null);

  const [showCurrency, setShowCurrency] = useState(true);

  return (
    <CardItemStyle>
      <Box sx={{ position: 'absolute', top: 20, left: 20, zIndex: 9 }}>
        <QRCode value="Hola Mundo" size={184} bgColor="transparent" fgColor="#fff" level="H" />
      </Box>
      <Box sx={{ position: 'absolute', top: 30, left: 250, zIndex: 9, color: '#fff' }}>
        <p>{balance}</p>
      </Box>
      <Box sx={{ position: 'absolute', top: 50, left: 250, zIndex: 9, color: '#fff' }}>
        <p>{balance}</p>
      </Box>
      <Box sx={{ position: 'absolute', top: 50, left: 250, zIndex: 9, color: '#fff' }}>
        <p>{balance}</p>
        <input
          type="text"
          value={balance}
          style={{
            /* 01 Primary/05 Darker */

            background: '#4A176E',
            /* 02 Secondary/03 Main */

            border: '1px solid #3366FF',
            /* 01 Shadows/Color/02 Secondary */

            boxShadow: '0px 8px 16px rgba(51, 102, 255, 0.24)',
            borderRadius: '8px',
            color: '#fff',
            flex: 'none',
            order: 3,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        />
      </Box>
    </CardItemStyle>
  );
}

// ----------------------------------------------------------------------
