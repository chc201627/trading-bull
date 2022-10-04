// @mui
import PropTypes from 'prop-types';
import { Button, Card, Typography, Stack, Grid } from '@mui/material';
// utils
import { fCurrency } from '../../../../utils/formatNumber';

// ----------------------------------------------------------------------

EcommerceCurrentBalance.propTypes = {
  title: PropTypes.string,
  currentBalance: PropTypes.number,
  sentAmount: PropTypes.number,
  sx: PropTypes.any,
};

export default function EcommerceCurrentBalance({ title, sentAmount, currentBalance, sx, ...other }) {
  const totalAmount = currentBalance - sentAmount;

  return (
    <Card sx={{ p: 3, ...sx }} {...other}>
      <Typography variant="subtitle2" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant="subtitle2" gutterBottom>
            11
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <Typography variant="h3">{fCurrency(totalAmount)}</Typography>

            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Your Current Balance
              </Typography>
              <Typography variant="body2">{fCurrency(currentBalance)}</Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Sent Amount
              </Typography>
              <Typography variant="body2">- {fCurrency(sentAmount)}</Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Total Amount
              </Typography>
              <Typography variant="subtitle1">{fCurrency(totalAmount)}</Typography>
            </Stack>

            <Stack direction="row" spacing={1.5}>
              <Button fullWidth variant="contained" color="warning">
                Transfer
              </Button>

              <Button fullWidth variant="contained">
                Receive
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
