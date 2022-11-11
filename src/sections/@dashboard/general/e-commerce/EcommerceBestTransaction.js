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
    settlement_generated: PropTypes.number,
    settlement_beneficiary: PropTypes.number,
    settlement_total: PropTypes.number,
    type: PropTypes.string,
  }),
};

function EcommerceBestTransactionRow({ row }) {
  const theme = useTheme();
  const dateEnable = new Date(row.createdAt);
  const dateOff = new Date(row.off);

  return (
    <TableRow>
      <TableCell align="left">
        <Stack direction="row" alignSelf="left">
          <Typography variant="subtitle2"> {row.balance} </Typography>
        </Stack>
      </TableCell>

      <TableCell>
        <Stack direction="row" alignItems="center">
          <Typography variant="subtitle2">
            {row.transaction_hash
              ? `${row.transaction_hash.substr(0, 6)}...${row.transaction_hash.substr(-6)}`
              : row.transaction_hash}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <Stack direction="row" alignItems="center">
          <Typography variant="subtitle2">{row.settlement_generated}</Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <Stack direction="row" alignItems="center">
          <Typography variant="subtitle2">{row.settlement_beneficiary}</Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <Stack direction="row" alignItems="center">
          <Typography variant="subtitle2">{row.settlement_total}</Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <Stack direction="row" alignItems="center">
          <Typography variant="subtitle2">{Intl.DateTimeFormat('en-US').format(dateEnable)}</Typography>
        </Stack>
      </TableCell>
      <TableCell align="right">
        <Stack>
          <Typography variant="subtitle2">
            <Label
              variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
              color={(row.type === 'BUY' && 'success') || (row.type === 'REINVESTED' && 'info') || 'error'}
            >
              {row.type}
            </Label>
          </Typography>
        </Stack>
      </TableCell>
    </TableRow>
  );
}
