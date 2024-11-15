import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import merge from 'lodash/merge';
import { useState } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import ReactApexChart from 'react-apexcharts';
// @mui
import {
  Card,
  CardHeader,
  Box,
  TextField,
  Stack,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@mui/material';
// components
import { BaseOptionChart } from '../../../../components/chart';
import AppTotalInvestments from './AppTotalInvestments';

// ----------------------------------------------------------------------

const RootStyle = styled(TableCell)(({ theme }) => ({
  '&:first-of-type': {
    boxShadow: 'none',
    borderRadius: 0,
  },
  '&:last-of-type': {
    boxShadow: 'none',
    borderRadius: 0,
  },
  color: theme.palette.grey[500],
  borderRight: '1px solid #394859',
  borderLeft: '1px solid #394859',
}));

AppAreaInstalled.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function AppAreaInstalled({ title, subheader, chartLabels, chartData, investmentBlock, ...other }) {
  const [seriesData, setSeriesData] = useState('2023');

  const [value, setValue] = useState(new Date('2023-01-01T21:11:54'));

  const months = ['Jan', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'];
  const percents = chartData[1].data[0].data;

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleChangeSeriesData = (event) => {
    setSeriesData(event.target.value);
  };

  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      categories: chartLabels,
    },
  });

  return (
    <Card {...other} sx={{ px: 3, py: 2 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent={'space-between'}>
        <AppTotalInvestments />
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </Stack>
      {chartData.map((item) => (
        <Box key={item.year} sx={{ mt: 3 }} dir="ltr">
          {item.year === seriesData && (
            <ReactApexChart type="area" series={item.data} options={chartOptions} height={364} />
          )}
        </Box>
      ))}
      <Typography variant="h6" sx={{ color: 'grey.500', mb: 2 }}>
        {investmentBlock}
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {months.map((month) => (
                <RootStyle align="center"> {month} </RootStyle>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {percents.map((value) =>
              value > 0 ? (
                <RootStyle align="center" sx={{ color: 'green' }}>
                  {value}
                </RootStyle>
              ) : (
                <RootStyle align="center" sx={{ color: 'red' }}>
                  {value}
                </RootStyle>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
