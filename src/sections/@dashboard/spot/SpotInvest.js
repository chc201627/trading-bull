import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// @mui
import {
  Card,
  Grid,
  LinearProgress,
  Typography,
  Box,
  Divider,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import Skeleton from '@mui/material/Skeleton';
import IsoIcon from '@mui/icons-material/Iso';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
// Hooks
import { GeneralSpot, Rate } from '../../../middleware';
import useLocales from '../../../hooks/useLocales';
import useSpots from '../../../hooks/useSpots';
// components
import Iconify from '../../../components/Iconify';
import SpotInvestModal from './SpotInvestModal';
import useTronLink from '../../../hooks/useTronLink';

const RootStyle = styled(Card)(({ theme }) => ({
  background: theme.palette.grey[900],
  boxShadow: 'none',
  padding: '2rem',
}));

SpotInvest.propTypes = {};

export default function SpotInvest(props) {

  const [isLoading, setisLoading] = useState(false);
  const [availableValue, setAvailableValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [valueUsed, setValueUsed] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [ratesMonth, setRatesMonth] = useState(0);
  const [ratesYear, setRatesYear] = useState(0);
  const [disable, setDisable] = React.useState(false);
  const getInformation = async () => {
    setisLoading(true)
    const response = await GeneralSpot.getAll();
    const responseRate = await Rate.getAll();
    setisLoading(false)
    console.log(responseRate.data[0].attributes);
    setMinValue(response.data[0].attributes.min_value);
    setRatesYear(responseRate.data[0].attributes.yearly_rate);
    setRatesMonth(responseRate.data[0].attributes.monthly_rate);
    setAvailableValue(response.data[0].attributes.total_value - response.data[0].attributes.value_used);
    console.log(response.data[0].attributes.total_value - response.data[0].attributes.value_used);
    setMaxValue(response.data[0].attributes.max_value);
    setValueUsed(response.data[0].attributes.value_used);
    setTotalValue(response.data[0].attributes.total_value);
  };
  useEffect(() => {
    getInformation();
  }, []);

  const { translate } = useLocales();
  const { transferTronUSDT, getTransactionStatus } = useTronLink();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModal = (event) => {
    setDisable(true);
    GeneralSpot.delegateEnergy().then((data) => {
      if (data === 'User has enough resources to pay usdt transfer') {
        setModalIsOpen(true);
        setDisable(false);
      } else {
        getTransactionStatus(data.txid).then((response) => {
          if (response.ret[0].contractRet === 'SUCCESS') {
            setDisable(false);
            setModalIsOpen(true);
          }
        });
      }
    });
  };
  return (
    <>
      {
        isLoading ?
            <RootStyle>
              <Grid container>
                <Grid item xs={6}>
                  <Skeleton width='70%' />
                </Grid>
                <Grid container item xs={6} justifyContent="flex-end">
                  <Skeleton width='70%' />
                </Grid>
                <Grid item xs={12} mt={1}>
                  <Skeleton />
                </Grid>
                <Grid item xs={12} mt={2} container justifyContent="center">
                  <Skeleton height={80} width='70%' />
                </Grid>
                <Grid item mt={2} xs={12}>
                  <Skeleton width='20%' />
                </Grid>
                <Grid item xs={12} mt={2} container justifyContent="center">
                  <Skeleton height={80} width='70%' />
                </Grid>
                <Grid item xs={12} mt={2} >
                  <Skeleton height={40} />
                </Grid>
                <Grid item xs={12} mt={1} mb={1} >
                  <Skeleton height={40} />
                </Grid>
              </Grid>
              <Skeleton height={70} />
            </RootStyle>
          :
          <>
            <SpotInvestModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
            <RootStyle>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">{translate('dashboard.spot.amount_invest')}</Typography>
                </Grid>
                <Grid container item xs={6} justifyContent="flex-end">
                  <Typography variant="subtitle1">${valueUsed}</Typography>
                </Grid>

                <Grid item xs={10} mt={2} pt={1}>
                  <LinearProgress
                    value={(valueUsed * 100) / totalValue}
                    variant="determinate"
                    sx={{
                      [`&.${linearProgressClasses.colorPrimary}`]: {
                        backgroundColor: 'primary.lighter',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={2} mt={2} container justifyContent="center">
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.disabled',
                    }}
                  >
                    {(valueUsed * 100) / totalValue}%
                  </Typography>
                </Grid>

                <Grid item xs={6} mt={2} container flexDirection="column" alignItems="center">
                  <Box display="flex" alignItems="center">
                    <Typography variant="h5" mr={1}>
                      ${availableValue}
                    </Typography>
                    <Iconify icon="eva:inbox-fill" width={20} height={20} />
                  </Box>
                  <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                    {translate('dashboard.spot.deposits_available')}
                  </Typography>
                </Grid>
                <Grid item xs={6} mt={2} container flexDirection="column" alignItems="center">
                  <Box display="flex" alignItems="center">
                    <Typography variant="h6" mr={1}>
                      $ {minValue} - {maxValue}
                    </Typography>
                    <Iconify icon="bx:calendar-alt" width={20} height={20} />
                  </Box>
                  <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                    {translate('dashboard.spot.inversation_rate')}
                  </Typography>
                </Grid>

                <Grid item xs={12} mt={2}>
                  <Divider sx={{ borderStyle: 'dashed' }} />
                </Grid>

                <Grid item xs={12} mt={2} container justifyContent="space-between" alignItems="center">
                  <Typography variant="body2" mr={1} sx={{ color: 'text.disabled' }}>
                    {translate('dashboard.spot.rentability')}
                  </Typography>
                  <Iconify icon="ant-design:info-circle-filled" width={20} height={20} sx={{ color: 'text.disabled' }} />
                </Grid>

                <Grid item xs={6} mt={2} container flexDirection="column" alignItems="center">
                  <Grid item xs={6} container flexDirection="row" alignItems="center" justifyContent="space-around">
                    <IsoIcon fontSize="small" color="disabled" />
                    <Typography variant="h5" mr={1}>
                      6%
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                    {translate('dashboard.spot.rate_per_month')}
                  </Typography>
                </Grid>
                <Grid item xs={6} mt={2} container flexDirection="column" alignItems="center">
                  <Grid item xs={6} container flexDirection="row" alignItems="center" justifyContent="space-around">
                    <IsoIcon fontSize="small" color="disabled" />
                    <Typography variant="h5" mr={1}>
                      8%
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                    {translate('dashboard.spot.rate_per_year')}
                  </Typography>
                </Grid>

                <Grid item xs={12} mt={2}>
                  <Divider sx={{ borderStyle: 'dashed' }} />
                </Grid>

                <Grid item xs={6} mt={2} container justifyContent="flex-start">
                  <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                    {translate('dashboard.spot.investment_type')}
                  </Typography>
                </Grid>
                <Grid item xs={6} mt={2} container justifyContent="flex-end">
                  <Typography variant="subtitle2">PAMM TRADING</Typography>
                </Grid>

                <Grid item xs={6} mt={2} container justifyContent="flex-start">
                  <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                    {translate('dashboard.spot.sector')}
                  </Typography>
                </Grid>
                <Grid item xs={6} mt={2} container justifyContent="flex-end">
                  <Typography variant="subtitle2">INDICES-FOREX-CRYPTO</Typography>
                </Grid>

                <Grid item xs={12} mt={2}>
                  <Divider sx={{ borderStyle: 'dashed' }} />
                </Grid>

                {/* <Grid item xs={6} mt={2} container justifyContent="flex-start" alignItems="center">
            <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
              {translate('dashboard.spot.amount_to_invest')}
            </Typography>
          </Grid>
          <Grid item xs={6} mt={2} container justifyContent="flex-end">
            <TextField
              label={translate('dashboard.spot.investment_value')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="cryptocurrency:usdt" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid> */}

                {/* <Grid item xs={4} mt={2} container justifyContent="flex-start" alignItems="center">
            <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
              {translate('dashboard.spot.block_periods')}
            </Typography>
          </Grid>
          <Grid item xs={8} mt={2} container justifyContent="space-around" alignItems="center">
            <FormControlLabel control={<Checkbox defaultChecked />} label={translate('dashboard.spot.month')} />
            <FormControlLabel control={<Checkbox />} label={translate('dashboard.spot.year')} />
          </Grid> */}

                <Grid item xs={12} mt={2}>
                  <Button
                    size="large"
                    fullWidth
                    variant="contained"
                    type="button"
                    endIcon={<Iconify icon="ic:outline-add-shopping-cart" width={20} height={20} />}
                    onClick={(event) => handleModal(event)}
                    disabled={disable}
                  >
                    {translate('invest')}
                  </Button>
                </Grid>
              </Grid>
            </RootStyle>
          </>
      }

    </>
  );
}
