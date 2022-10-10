import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import { useState } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box, TextField, Stack, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
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

  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  const percents = ['+14.1', '-3.5', '+15', '+12', '-1', '+4.2', '+6.7', '-3.9', '-1.5', '+7.1', '+9.4', '+12']

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
    <Card {...other} sx={{ px: 3, py:2 }}>
      <Stack direction={{xs:'column', md:'row'}} alignItems="center" justifyContent={'space-between'}>
      <AppTotalInvestments/>
      <Stack direction={{xs:'column', md:'row'}} spacing={1} >
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
      <TableContainer >
      <Table>
        <TableHead>
          <TableRow >
            {months.map((month) => (
              <TableCell align='center'> {month} </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
        {percents.map((value) => (
            value>0? 
            <TableCell align='center' sx={{color: 'green'}}>{value}</TableCell> 
            : 
            <TableCell align='center' sx={{color:'red'}}>{value}</TableCell>
            ))}
        </TableBody>
      </Table>
      </TableContainer>
    </Card>
  );
}
