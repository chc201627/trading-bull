// @mui
import CopyToClipboard from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import { Button, Card, Typography, Stack, Grid, TextField } from '@mui/material';

import useLocales from '../../../../hooks/useLocales';
import { InfoIcon } from '../../../../theme/overrides/CustomIcons';
import Label from '../../../../components/Label';
// utils
import { fCurrency } from '../../../../utils/formatNumber';

// ----------------------------------------------------------------------

EcommerceCurrentBalance.propTypes = {
  title: PropTypes.string,
  currentBalance: PropTypes.number,
  sentAmount: PropTypes.number,
  sx: PropTypes.any,
};

export default function EcommerceCurrentBalance({
  title,
  totalReferrals,
  toalReturnReferrals,
  createReferralLink,
  createReferralCode,
  referralCode,
  sx,
  ...other
}) {
  // const totalAmount = currentBalance - sentAmount;
  const { translate } = useLocales();

  return (
    <Card sx={{ p: 3, ...sx }} {...other}>
      <Grid container spacing={3} alignItems={'center'}>
        <Grid item xs={12} md={8}>
          <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} justifyContent="space-around">
            <Stack>
              <Typography variant="h3" align="center">
                {toalReturnReferrals} USDT
              </Typography>
              <Typography variant="body1" align="center">
                {translate('refers.balance.total_return')}
              </Typography>
              <Label color="secondary" variant="outlined" startIcon={<InfoIcon />} sx={{ p: 1, mt: 1 }}>
              {translate('refers.balance.total_return_alert')}
              </Label>
            </Stack>
            <Stack>
              <Typography variant="h3" align="center">
                {totalReferrals}
              </Typography>
              <Typography variant="body1" align="center">
              {translate('refers.balance.total_refers')}
              </Typography>
              <Label color="secondary" variant="outlined" startIcon={<InfoIcon />} sx={{ p: 1, mt: 1 }}>
              {translate('refers.balance.total_refers_alert')}
              </Label>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <Stack>
              <Label color="secondary" variant="outlined" startIcon={<InfoIcon />} sx={{ p: 1 }}>
              {translate('refers.balance.alert_code')}
              </Label>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <TextField fullWidth variant="outlined" value={referralCode} />
            </Stack>

            <Stack direction={{ xs: 'column', lg: 'row' }} spacing={1}>
              <Button
                onClick={() => {
                  createReferralCode();
                }}
                fullWidth
                variant="contained"
                sx={{ fontWeight: 0, fontSize: 13}}
                color="info"
              >
                {translate('refers.balance.generate_code')}
              </Button>

              <Button
                onClick={() => {
                  createReferralLink();
                }}
                fullWidth
                variant="contained"
                sx={{ fontWeight: 0, fontSize: 13 }}
                color="primary"
              >
                {translate('refers.balance.generate_link')}
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
