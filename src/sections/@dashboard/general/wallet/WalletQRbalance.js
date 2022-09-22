import PropTypes from 'prop-types';
import { useState } from 'react';
import Slider from 'react-slick';
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

  return (
    <RootStyle sx={sx}>
      <Box sx={{ ...shadowStyle }}>
        <CardItem key={1} card={1} />
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
      <Box sx={{ position: 'absolute', top: 16, right: 16, zIndex: 9 }}>dd</Box>
    </CardItemStyle>
  );
}

// ----------------------------------------------------------------------
