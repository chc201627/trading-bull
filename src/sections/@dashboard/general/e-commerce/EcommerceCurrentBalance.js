// @mui
import PropTypes from 'prop-types';
import { Button, Card, Typography, Stack, Grid, TextField } from '@mui/material';
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

export default function EcommerceCurrentBalance({ title, sentAmount, currentBalance, sx, ...other }) {
  const totalAmount = currentBalance - sentAmount;

  return (
    <Card sx={{ p: 3, ...sx }} {...other}>
      <Grid container spacing={3}>
        <Grid item xs={8} >
          <Stack spacing={2} direction="row" justifyContent="space-around" alignItems={"center"}>
            <Stack>
              <Typography variant="h3" align='center'>
                1000 usdt
              </Typography>
              <Typography variant="body1" align='center'>
                Total return for refers
              </Typography>
              <Label color='primary' variant='outlined' startIcon={<InfoIcon />} sx={{ p: 2 }}>
                This is money you will get each month for every refer
              </Label>
            </Stack>
            <Stack>
              <Typography variant="h3" align='center'>
                21
              </Typography>
              <Typography variant="body1" align='center'>
                Total refers
              </Typography>
              <Label children='Last 30 days of refers link to the plattform by your code' color='primary' variant='outlined' startIcon={<InfoIcon />} sx={{ p: 2 }} />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <Stack>
              <Label color='primary' variant='outlined' startIcon={<InfoIcon />} sx={{ p: 2 }}>
                This code have a duration of 24 hours and cannot be used twice or more times
              </Label>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <TextField fullWidth label="Outlined" variant="outlined" />
            </Stack>

            <Stack direction="row" spacing={1}>
              <Button fullWidth variant="contained" sx={{ fontWeight: 0, fontSize: 13 }}>
                Generate Code
              </Button>

              <Button fullWidth variant="contained" sx={{ fontWeight: 0, fontSize: 13 }}>
                Generate Link
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Card >
  );
}
