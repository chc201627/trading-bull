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
}) {
  const displayShipping = shipping !== null ? 'Free' : '-';

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="column" justifyContent="space-between">
              <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                Total Profit
              </Typography>
            </Stack>
            {/* <Chip variant="filled"  label="Blocked" color='info'/> */}
          </Stack>

          <Stack direction="row" justifyContent="flex-start">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {'Value : '}{' '}
            </Typography>
            <Typography variant="subtitle1"> &nbsp; $0.00</Typography>
          </Stack>
          <Stack direction="row" justifyContent="flex-start">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {'ROI : '}{' '}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'green' }}>
              {' '}
              &nbsp; +8%
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="flex-start">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {'Last update at : '}{' '}
            </Typography>
            <Typography variant="subtitle2"> &nbsp; NO DATE AVAILABLE </Typography>
          </Stack>

          <Divider />

          <Stack direction="row" justifyContent="space-between">
            <Stack direction="column" justifyContent="space-between">
              <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                Last Deposit
              </Typography>
            </Stack>
            {/* <Chip variant="filled"  label="Blocked" color='info'/> */}
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1"> &nbsp; $0.00</Typography>
            <Stack direction="row" justifyContent="flex-start">
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {'Status : '}{' '}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'green' }}>
                {' '}
                &nbsp; +0%
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="flex-start">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {'Expected return : '}{' '}
            </Typography>
            <Typography variant="subtitle2"> &nbsp; 0% </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
