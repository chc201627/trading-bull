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

EcommerceBestTransaction.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  tableData: PropTypes.array.isRequired,
  tableLabels: PropTypes.array.isRequired,
};
export default function EcommerceBestTransaction({ title, subheader, tableData, tableLabels, ...other }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minHeight: 150 }}>
          <Table>
            <TableHeadCustom headLabel={tableLabels} />
            <TableBody>
              {tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <EcommerceBestTransactionRow key={row.id} row={row} />
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={tableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Scrollbar>
    </Card>
  );
}

// ----------------------------------------------------------------------

EcommerceBestTransactionRow.propTypes = {
  row: PropTypes.shape({
    balance: PropTypes.number,
    transaction_hash: PropTypes.string,
    balance_pre_transaction: PropTypes.number,
    settlement_generated: PropTypes.number,
    settlement_beneficiary: PropTypes.number,
    settlement_total: PropTypes.number,
    type: PropTypes.string,
  }),
};

function EcommerceBestTransactionRow({ row }) {
  const theme = useTheme();
  const dateEnable = new Date(row.enable);
  const dateOff = new Date(row.off);

  return (
    <TableRow>
      <TableCell>
        <Stack direction="row" alignItems="center">
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2"> {row.balance} </Typography>
          </Box>
        </Stack>
      </TableCell>

      <TableCell>{row.balance_pre_transaction}</TableCell>
      <TableCell>
        {' '}
        {row.transaction_hash
          ? `${row.transaction_hash.substr(0, 6)}...${row.transaction_hash.substr(-6)}`
          : row.transaction_hash}
      </TableCell>
      <TableCell>{row.settlement_generated}</TableCell>
      <TableCell>{row.settlement_beneficiary}</TableCell>
      <TableCell>{row.settlement_total}</TableCell>
      <TableCell align="right">
        <Label
          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
          color={(row.type === 'BUY' && 'success') || (row.type === 'REINVESTED' && 'info') || 'error'}
        >
          {row.type}
        </Label>
      </TableCell>
    </TableRow>
  );
}
