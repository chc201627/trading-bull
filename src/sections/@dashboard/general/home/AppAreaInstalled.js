import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import { useState } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box, TextField, Stack } from '@mui/material';
// components
import { BaseOptionChart } from '../../../../components/chart';
import AppTotalInvestments from './AppTotalInvestments';

// ----------------------------------------------------------------------

AppAreaInstalled.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function AppAreaInstalled({ title, subheader, chartLabels, chartData, ...other }) {
  const [seriesData, setSeriesData] = useState('2019');

  const [value, setValue] = useState(new Date('2022-10-06T21:11:54'));

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
    <Card {...other}>
      <Stack direction={{xs:'column', md:'row'}} alignItems="center">
      <AppTotalInvestments/>
      <Stack direction={{xs:'column', md:'row'}} spacing={1} sx={{mr:3}} >
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
        <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {item.year === seriesData && (
            <ReactApexChart type="area" series={item.data} options={chartOptions} height={364} />
          )}
        </Box>
      ))}
    </Card>
  );
}
