import PropTypes from 'prop-types';
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
} from '@mui/material';

// utils
import useLocales from '../../../../hooks/useLocales';

// ----------------------------------------------------------------------

TradingInformationCard.propTypes = {
  total: PropTypes.number,
  discount: PropTypes.number,
  subtotal: PropTypes.number,
  shipping: PropTypes.number,
  onEdit: PropTypes.func,
  enableEdit: PropTypes.bool,
  onApplyDiscount: PropTypes.func,
  enableDiscount: PropTypes.bool,
  totalEarning: PropTypes.string,
};

export default function TradingInformationCard({
  total,
  onEdit,
  discount,
  subtotal,
  shipping,
  onApplyDiscount,
  enableEdit = false,
  enableDiscount = false,
  type,
  totalEarning,
}) {
  const displayShipping = shipping !== null ? 'Free' : '-';

  const { translate } = useLocales();
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="column" justifyContent="space-between">
              <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                {translate('dashboard.home.earnings.title')}
              </Typography>
            </Stack>
            {/* <Chip variant="filled"  label="Blocked" color='info'/> */}
          </Stack>

          <Stack direction="row" justifyContent="flex-start">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {translate('dashboard.home.earnings.value')}{' '}
            </Typography>
            <Typography variant="subtitle1"> &nbsp; ${totalEarning[0].totalEarnings || 0}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="flex-start">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {translate('dashboard.home.earnings.rentability')}{' '}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'green' }}>
              {' '}
              &nbsp; +/- &nbsp; {totalEarning[0].rentability || 0}%
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="flex-start">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {translate('dashboard.home.earnings.lastUpdate')}{' '}
            </Typography>
            <Typography variant="subtitle2"> &nbsp; {new Date().toLocaleDateString()} </Typography>
          </Stack>

          <Divider />

          <Stack direction="row" justifyContent="space-between">
            <Stack direction="column" justifyContent="space-between">
              <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                {translate('dashboard.home.earnings.lastDeposit')}
              </Typography>
            </Stack>
            {/* <Chip variant="filled"  label="Blocked" color='info'/> */}
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1"> &nbsp; $ &nbsp; {totalEarning[0].totalDeposits || 0}</Typography>
            <Stack direction="row" justifyContent="flex-start">
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {translate('dashboard.home.earnings.depositStatus')}{' '}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'green' }}>
                {' '}
                &nbsp; +/- &nbsp; {totalEarning[0].rentability || 0}%
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="flex-start">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {translate('dashboard.home.earnings.expectedReturn')}{' '}
            </Typography>
            <Typography variant="subtitle2"> &nbsp; 6% </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
