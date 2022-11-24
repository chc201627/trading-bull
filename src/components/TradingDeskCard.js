import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// @mui
import {
  Box,
  Card,
  Stack,
  Button,
  Divider,
  TextField,
  CardHeader,
  Typography,
  CardContent,
  InputAdornment,
  Chip,
  Switch,
  Alert,
  FormControlLabel,
} from '@mui/material';
// utils
import useTronLink from '../hooks/useTronLink';
import useLocales from '../hooks/useLocales';
// components
import { Spot } from '../middleware';

// ----------------------------------------------------------------------

TradingDeskCard.propTypes = {
  total: PropTypes.number,
  discount: PropTypes.number,
  subtotal: PropTypes.number,
  shipping: PropTypes.number,
  onEdit: PropTypes.func,
  enableEdit: PropTypes.bool,
  onApplyDiscount: PropTypes.func,
  enableDiscount: PropTypes.bool,
};

export default function TradingDeskCard({
  total,
  onEdit,
  discount,
  subtotal,
  shipping,
  onApplyDiscount,
  enableEdit = false,
  enableDiscount = false,
  type,
  spot,
}) {
  const displayShipping = shipping !== null ? 'Free' : '-';
  const date = new Date(spot.createdAt);
  const dateac = new Date(spot.enabled_before_at);
  const fecha = new Date(spot.enabled_before_at);
  const fechaActual = new Date();
  if (spot.permanence_id.name === 'Monthly') {
    fecha.setDate(dateac.getDate() + 30);
  } else {
    fecha.setDate(dateac.getDate() + 365);
  }

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  const optionsTime = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  };

  const dateReturn = new Date();
  if (dateReturn.getMonth() + 1 > 12) {
    dateReturn.setMonth(1);
  } else {
    dateReturn.setMonth(dateReturn.getMonth() + 1);
  }
  dateReturn.setDate(1);
  const { translate } = useLocales();
  const { getCurrentWalletAddress, getUsdtBalance, trimAddress } = useTronLink();
  const [address, setAddress] = useState('');

  const [reinvest, setReinvest] = useState(spot.is_reinvest);

  const [checkedSell, setCheckedSell] = useState(spot.is_sell);

  const handleChangeSwitch = (event) => {
    setReinvest(event.target.checked);
  };
  const handleChangeSwitchSell = (event) => {
    setCheckedSell(event.target.checked);
    console.log(checkedSell);
  };
  useEffect(() => {
    const address = getCurrentWalletAddress();
    setAddress(address);
  }, []);
  useEffect(() => {
    async function updateSellMode() {
      const response = Spot.update(spot.id, {
        data: {
          is_reinvest: false,
          is_sell: checkedSell,
        },
      });
    }
    if (checkedSell) {
      setReinvest(false);
    }
    updateSellMode();
  }, [checkedSell]);

  useEffect(() => {
    async function updateReinvestMode() {
      const response = Spot.update(spot.id, {
        data: {
          is_reinvest: reinvest,
        },
      });
    }
    updateReinvestMode();
  }, [reinvest]);
  const Card1 = () => (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="column" justifyContent="space-between">
          <Typography variant="body1" sx={{ color: 'text.primary' }}>
            {translate('dashboard.home.spots.expectedBonus')}
          </Typography>

          <Stack direction="row">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {' '}
              {translate('dashboard.home.spots.nextPaymentAt')}: &nbsp;{' '}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.primary' }}>
              {Intl.DateTimeFormat('default').format(dateReturn)}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="h4" sx={{ color: 'text.primary' }}>
          {spot.permanence_id.name === 'Monthly'
            ? Math.floor((spot.spot_value * 6) / 100)
            : Math.floor((spot.spot_value * 8) / 100)}
        </Typography>
      </Stack>
      <Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {translate('dashboard.home.spots.depostiWallet')}:{' '}
          </Typography>
          <Typography variant="body1"> &nbsp; {`${address.substr(0, 6)}...${address.substr(-6)}`}</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {'ROI : '}{' '}
          </Typography>
          <Typography variant="body1"> &nbsp; 6%</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {translate('dashboard.home.spots.investmentType')}:{' '}
          </Typography>
          <Typography variant="body1"> &nbsp; TRADING</Typography>
        </Stack>
      </Stack>

      <Stack direction="column" justifyContent="space-between">
        <Stack direction="column" justifyContent="space-around">
          <Stack direction="column" justifyContent="center">
            <FormControlLabel
              control={<Switch onChange={handleChangeSwitch} checked={reinvest} disabled={checkedSell} />}
              label={translate('dashboard.home.spots.reinvestMode')}
            />
          </Stack>
        </Stack>
        {(() => {
          if (!reinvest && checkedSell) {
            return <></>;
          }
          if (reinvest && !checkedSell) {
            return (
              <Alert variant="filled" severity="success" hidden>
                {translate('dashboard.home.spots.reinvestModeTrue')}
              </Alert>
            );
          }
          return (
            <Alert variant="filled" severity="warning" hidden>
              {translate('dashboard.home.spots.reinvestModeFalse')}
            </Alert>
          );
        })()}
      </Stack>

      <Stack direction="column" justifyContent="space-between">
        <Stack direction="column" justifyContent="space-around">
          <Stack direction="column" justifyContent="center">
            <FormControlLabel
              control={
                <Switch onChange={handleChangeSwitchSell} checked={checkedSell} disabled={fechaActual < fecha} />
              }
              label={translate('dashboard.home.spots.sell')}
            />
          </Stack>
        </Stack>

        {!checkedSell ? (
          <Alert variant="filled" severity="warning">
            {translate('dashboard.home.spots.sellFalse')} {Intl.DateTimeFormat('en-US').format(fecha)}
          </Alert>
        ) : (
          <Alert variant="filled" severity="success">
            {translate('dashboard.home.spots.sellTrue')}
          </Alert>
        )}
      </Stack>
    </>
  );

  const Card2 = () => (
    <>
      <Stack direction="column" justifyContent="center">
        <Typography align="center" variant="h4">
          {Intl.DateTimeFormat('default', options).format(dateac)}
        </Typography>
        <Typography align="center" variant="body2" sx={{ color: 'text.secondary' }}>
          {translate('dashboard.home.spots.activationDate')}: {Intl.DateTimeFormat().format(dateac)}
        </Typography>
      </Stack>
      <Stack direction="column" justifyContent="center">
        <Typography align="center" variant="h4">
          {Intl.DateTimeFormat('default', optionsTime).format(dateac)}
        </Typography>
        <Typography align="center" variant="body2" sx={{ color: 'text.secondary' }}>
          {translate('dashboard.home.spots.time')}
        </Typography>
      </Stack>

      <Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {translate('dashboard.home.spots.rentability')}:{' '}
          </Typography>
          <Typography variant="body1"> &nbsp; 0% - 13%</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {translate('dashboard.home.spots.investmentType')}:{' '}
          </Typography>
          <Typography variant="body1"> &nbsp; TRADING</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {translate('dashboard.home.spots.sector')}:{' '}
          </Typography>
          <Typography variant="body1"> &nbsp; Indices - Forex - Crypto</Typography>
        </Stack>
      </Stack>
    </>
  );

  const Card3 = () => (
    <>
      <Stack direction="column" justifyContent="center">
        <Typography align="center" variant="h4">
          06 / 12 / 2022 16:45 PM
        </Typography>
      </Stack>
      <Stack direction="column">
        <Typography variant="body2">
          Bonus amount has been send to reference wallet above. For any issue contact our customer services
        </Typography>
      </Stack>
      <Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {'Payment Hash : '}{' '}
          </Typography>
          <Typography variant="body1"> &nbsp; P245GHAH...JHATFAT</Typography>
        </Stack>
      </Stack>

      <Button variant="contained">See details </Button>
    </>
  );

  const typeCard = {
    1: <Card1 />,
    2: <Card2 />,
    3: <Card3 />,
  };
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="column" justifyContent="space-between">
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {translate('dashboard.home.spots.deposit')}: {Intl.DateTimeFormat().format(date)}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Trading
              </Typography>
            </Stack>
            <Chip variant="filled" label="Blocked" color="info" />
          </Stack>

          <Stack direction="row" justifyContent="flex-start">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {translate('dashboard.home.spots.blockType')}:{' '}
            </Typography>
            <Typography variant="subtitle2">
              {' '}
              &nbsp;{' '}
              {spot.permanence_id.name === 'Monthly'
                ? translate('dashboard.home.spots.blockTypeMontlhy')
                : translate('dashboard.home.spots.blockTypeYearly')}{' '}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Stack direction="column" justifyContent="space-between">
              <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                {translate('dashboard.home.spots.investValue')}
              </Typography>
              <Typography variant="h4" sx={{ color: 'text.primary' }}>
                {spot.spot_value} USDT
              </Typography>
            </Stack>
            <Typography color={spot.status === 'ACTIVE' ? 'green' : 'purple'} variant="h5">
              {spot.status}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="flex-start">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {'Hash : '}{' '}
            </Typography>
            <Typography variant="body2">
              {' '}
              &nbsp; {`${spot.collected_hash.substr(0, 6)}...${spot.collected_hash.substr(-6)}`}
            </Typography>
          </Stack>

          <Divider />

          {typeCard[type]}
        </Stack>
      </CardContent>
    </Card>
  );
}
