import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// @mui
import {
  Dialog,
  Card,
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Alert,
  Button,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

// Hooks
import useLocales from '../../../hooks/useLocales';
import useTronLink from '../../../hooks/useTronLink';
// middleware
import { GeneralSpot } from '../../../middleware';

// components
import Iconify from '../../../components/Iconify';

SpotInvestModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

PendingAction.propTypes = {
  onClose: PropTypes.func,
  investment: PropTypes.object,
  handleChange: PropTypes.func,
  handleTransfer: PropTypes.func,
  handleSpotCheckBox: PropTypes.func,
  checkboxesState: PropTypes.string,
};

WalletInfo.propTypes = {
  investment: PropTypes.object,
};

ConfirmingAction.propTypes = {
  investment: PropTypes.object,
};

ConfirmedAction.propTypes = {
  investment: PropTypes.object,
};

CancelledAction.propTypes = {
  investment: PropTypes.object,
};

const RootStyle = styled(Card)(({ theme }) => ({
  background: theme.palette.grey[900],
  boxShadow: 'none',
  padding: '2rem',
  [theme.breakpoints.down('sm')]: {
    width: '20rem',
    padding: '2rem',
  },
  [theme.breakpoints.up('sm')]: {
    width: '30rem',
    padding: '2rem',
  },
  [theme.breakpoints.down(400)]: {
    width: '22rem',
    padding: '1.7rem',
    marginBottom: '-25px',
  },
}));

function PendingAction(props) {
  const { onClose, investment, handleChange, handleTransfer, handleSpotCheckBox, checkboxesState } = props;

  const { translate } = useLocales();

  return (
    <>
      <Grid container>
        <Grid item sm={12}>
          <Typography variant="h3" textAlign="center">
            {translate('dashboard.spot.please_confirm')}
          </Typography>
        </Grid>

        <Grid item xs={6} mt={2} container justifyContent="flex-start" alignItems="center">
          <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
            {translate('dashboard.spot.amount_to_invest')}:
          </Typography>
        </Grid>
        <Grid item xs={6} mt={2} container justifyContent="flex-end">
          <TextField
            label={translate('dashboard.spot.investment_value')}
            onChange={(e) => handleChange('total_payed', e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="cryptocurrency:usdt" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={4} mt={2} container justifyContent="flex-start" alignItems="center">
          <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
            {translate('dashboard.spot.block_periods')}
          </Typography>
        </Grid>
        <Grid item xs={8} mt={2} container justifyContent="space-around" alignItems="center">
          <FormControlLabel
            control={<Checkbox checked={checkboxesState === '1'} onChange={handleSpotCheckBox} name={'1'} />}
            label={translate('dashboard.spot.month')}
          />
          <FormControlLabel
            control={<Checkbox checked={checkboxesState === '2'} onChange={handleSpotCheckBox} name={'2'} />}
            label={translate('dashboard.spot.year')}
          />
        </Grid>

        <Grid item sm={12}>
          <Typography variant="subtitle2" textAlign="center" mt={3}>
            {translate('dashboard.spot.total_to_pay')}
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography variant="h3" textAlign="center">
            {`$${(investment.total_payed * 1.03).toFixed(2)} USDT`}
          </Typography>
        </Grid>

        <Grid item sm={12} sx={{ pr: 0 }}>
          <Alert
            variant="outlined"
            sx={{ mt: 1, backgroundColor: 'info.lighter', color: 'info.darker' }}
            severity="info"
          >
            {translate('dashboard.spot.commision_alert')}
          </Alert>
        </Grid>

        <WalletInfo investment={investment} />

        <Grid item sm={12} sx={{ m: 'auto' }}>
          <Button sx={{ my: 2 }} variant="outlined" fullWidth onClick={() => onClose()}>
            {translate('goBack')}
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleTransfer()}
            disabled={investment.total_payed < 1 || checkboxesState === -1}
          >
            {translate('dashboard.spot.make_you_invest')}
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

function ConfirmingAction(props) {
  const { investment } = props;
  const { translate } = useLocales();

  return (
    <Grid container>
      <Grid item sm={5.5}>
        <Typography variant="h3" textAlign="right">
          15
        </Typography>
        <Typography textAlign="right" variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {translate('dashboard.spot.minutes')}
        </Typography>
      </Grid>
      <Grid item sm={1}>
        <Typography variant="h3" textAlign="center">
          :
        </Typography>
      </Grid>
      <Grid item sm={5.5}>
        <Typography variant="h3" textAlign="left">
          15
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {translate('dashboard.spot.seconds')}
        </Typography>
      </Grid>
      <Grid item sm={12}>
        <Typography variant="subtitle2" textAlign="center">
          {translate('dashboard.spot.time_remaining')}
        </Typography>
      </Grid>
      <Grid item sm={12}>
        <Alert
          variant="outlined"
          sx={{ mt: 1, backgroundColor: 'warning.lighter', color: 'warning.darker' }}
          severity="warning"
        >
          {translate('dashboard.spot.have_issue')}
        </Alert>
      </Grid>
      <Grid item sm={12}>
        <Typography variant="subtitle2" textAlign="center" mt={3}>
          {translate('dashboard.spot.your_invert')}
        </Typography>
      </Grid>
      <Grid item sm={12}>
        <Typography variant="h3" textAlign="center">
          {`$${investment.total_payed} USDT`}
        </Typography>
      </Grid>

      <WalletInfo investment={investment} />

      <Grid item sm={12}>
        <Button sx={{ my: 2 }} variant="contained" fullWidth color="error">
          {translate('dashboard.spot.cancel_order')}
        </Button>
        <Button variant="contained" fullWidth>
          {translate('invest')}
        </Button>
      </Grid>
    </Grid>
  );
}

function ConfirmedAction(props) {
  const { translate } = useLocales();

  const { investment } = props;
  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography variant="h3" textAlign="center">
          {translate('dashboard.spot.confirm_title')}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.disabled' }}>
          {translate('dashboard.spot.confirm_message')}
        </Typography>
      </Grid>
      <Grid item sm={12}>
        <Typography variant="subtitle2" textAlign="center" mt={3}>
          {translate('dashboard.spot.your_invert')}
        </Typography>
      </Grid>
      <Grid item sm={12}>
        <Typography variant="h3" textAlign="center">
          {`$${investment.total_payed} USDT`}
        </Typography>
      </Grid>
      <WalletInfo investment={investment} />
      <Button sx={{ my: 2 }} variant="contained" fullWidth>
        {translate('dashboard.spot.return_profile')}
      </Button>
    </Grid>
  );
}

function CancelledAction(props) {
  const { translate } = useLocales();
  const { investment } = props;
  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography variant="h3" textAlign="center">
          {translate('dashboard.spot.cancelled_title')}
        </Typography>
      </Grid>

      <WalletInfo investment={investment} />
      <Button sx={{ my: 2 }} variant="contained" color="info" fullWidth>
        {translate('dashboard.spot.send_return_profile')}
      </Button>
      <Button variant="contained" fullWidth>
        {translate('dashboard.spot.return_profile')}
      </Button>
    </Grid>
  );
}

function WalletInfo(props) {
  const { investment } = props;
  const { translate } = useLocales();
  const { getCurrentWalletAddress } = useTronLink();

  return (
    <>
      <Grid item xs={4} mt={2} container justifyContent="flex-start" alignItems="center">
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {translate('wallet.wallet')} :
        </Typography>
      </Grid>
      <Grid item xs={8} mt={2} container justifyContent="flex-end" alignItems="center">
        <Typography variant="body2">{`${getCurrentWalletAddress().substr(0, 6)}...${getCurrentWalletAddress().substr(
          -6
        )}`}</Typography>
      </Grid>

      <Grid item xs={6} mt={2} container justifyContent="flex-start" alignItems="center">
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {translate('wallet.wallet_status')} :
        </Typography>
      </Grid>
      <Grid item xs={6} mt={2} container justifyContent="flex-end" alignItems="center">
        <Chip label={translate('wallet.status.connected')} color="success" sx={{ borderRadius: 1, fontWeight: 700 }} />
      </Grid>

      <Grid item xs={4} mt={2} container justifyContent="flex-start" alignItems="center">
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {translate('wallet.destination')} :
        </Typography>
      </Grid>
      <Grid item xs={8} mt={2} container justifyContent="flex-end" alignItems="center">
        <Typography variant="body2">{`${investment.destination_wallet.substr(
          0,
          6
        )}...${investment.destination_wallet.substr(-6)}`}</Typography>
      </Grid>

      <Grid item xs={4} mt={2} container justifyContent="flex-start" alignItems="center">
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {translate('wallet.network')} :
        </Typography>
      </Grid>
      <Grid item xs={8} mt={2} container justifyContent="flex-end" alignItems="center">
        <Typography variant="body2">TRON</Typography>
      </Grid>
    </>
  );
}

export default function SpotInvestModal(props) {
  const { isOpen, onClose } = props;
  const [checkboxesState, setCheckboxesState] = useState(-1);
  const { transferTronUSDT, getTransactionStatus } = useTronLink();

  const initialState = {
    total_payed: 0,
    destination_wallet: '',
    step: 0,
    hash: '',
  };

  const [investment, setInvestment] = useState(initialState);

  const handleInvestment = (key, value) => {
    setInvestment((current) => ({ ...current, [key]: value }));
  };

  const handleSpotCheckBox = (e) => {
    setCheckboxesState(e.target.name);
  };

  const getAdminWallet = async () => {
    const response = await GeneralSpot.getAdminWallet();
    handleInvestment('destination_wallet', response.data[0].attributes.address);
  };

  const handleTransfer = async () => {
    // GeneralSpot.delegateEnergy().then(() => console.log('delegateEnergy'));

    transferTronUSDT(investment.total_payed * 1.03, investment.destination_wallet).then((res) => {
      handleInvestment('step', 1);
      getTrxStats(res.data);
    });
  };

  const getTrxStats = async (trxId) => {
    setTimeout(() => {
      getTransactionStatus(trxId)
        .then((response) => {
          console.log({
            permanence_id: Number(checkboxesState),
            generalspot_id: 1,
            spot_value: investment.total_payed,
            total_payed: investment.total_payed * 1.03,
            collected_hash: investment.hash,
          });
          if (response.ret[0].contractRet === 'SUCCESS') {
            GeneralSpot.createSpot({
              data: {
                permanence_id: Number(checkboxesState),
                generalspot_id: 1,
                spot_value: investment.total_payed,
                total_payed: (investment.total_payed * 1.03).toFixed(2),
                collected_hash: trxId,
              },
            })
              .then((res) => {
                console.log(res);
                handleInvestment('step', 2);
              })
              .catch((err) => {
                console.log(err);
                handleInvestment('step', 3);
              });
          } else {
            handleInvestment('step', 3);
          }
        })
        .catch((err) => {
          console.log('step3 ', err);
          handleInvestment('step', 3);
        });
    }, 10000);
  };

  useEffect(() => {
    getAdminWallet();
  }, []);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <RootStyle>
        {investment.step === 0 && (
          <PendingAction
            onClose={onClose}
            investment={investment}
            handleChange={handleInvestment}
            handleTransfer={handleTransfer}
            handleSpotCheckBox={handleSpotCheckBox}
            checkboxesState={checkboxesState}
          />
        )}
        {investment.step === 1 && <ConfirmingAction investment={investment} />}
        {investment.step === 2 && <ConfirmedAction investment={investment} />}
        {investment.step === 3 && <CancelledAction investment={investment} />}
        {/* <ConfirmedAction /> */}
        {/* <CancelledAction /> */}
      </RootStyle>
    </Dialog>
  );
}
