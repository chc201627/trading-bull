// @mui
import * as React from 'react';
import { useState } from 'react';
import TablePagination from '@mui/material/TablePagination';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  Table,
  Stack,
  Avatar,
  TableRow,
  TableBody,
  TableCell,
  CardHeader,
  Typography,
  TableContainer,
} from '@mui/material';
import Pagination from '@mui/material/Pagination';
// utils
import { fCurrency } from '../../../../utils/formatNumber';
// components
import Label from '../../../../components/Label';
import Image from '../../../../components/Image';
import Scrollbar from '../../../../components/Scrollbar';
import { TableHeadCustom } from '../../../../components/table';


// ----------------------------------------------------------------------

EcommerceBestSalesman.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  tableData: PropTypes.array.isRequired,
  tableLabels: PropTypes.array.isRequired,
};
export default function EcommerceBestSalesman({ title, subheader, tableData, tableLabels, ...other }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(tableData.length);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer  sx={{ minHeight : 150 }}>
          <Table>
            <TableHeadCustom headLabel={tableLabels} />
            <TableBody>
              {tableData.map((row) => (
                <EcommerceBestSalesmanRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>
      <TablePagination
      component="div"
      count={tableData.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </Card>
  );
}

// ----------------------------------------------------------------------

EcommerceBestSalesmanRow.propTypes = {
  row: PropTypes.shape({
    avatar: PropTypes.string,
    category: PropTypes.string,
    email: PropTypes.string,
    flag: PropTypes.string,
    name: PropTypes.string,
    rank: PropTypes.string,
    total: PropTypes.number,
  }),
};

function EcommerceBestSalesmanRow({ row }) {
  const theme = useTheme();
  const dateEnable = new Date(row.enable);
  const dateOff = new Date(row.off);

  return (
    <TableRow>
      <TableCell>
        <Stack direction="row" alignItems="center">
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2"> {row.id} </Typography>
          </Box>
        </Stack>
      </TableCell>

      <TableCell>{row.money}</TableCell>
      <TableCell>{row.spot}</TableCell>
      <TableCell>{Intl.DateTimeFormat('en-US').format(dateEnable)}</TableCell>
      <TableCell>{Intl.DateTimeFormat('en-US').format(dateOff)}</TableCell>
      <TableCell align="right">
        <Label
          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
          color={
            (row.status === 'ACTIVE' && 'success') ||
            'error'
          }
        >
          {row.status}
        </Label>
      </TableCell>
    </TableRow>
  );
}
