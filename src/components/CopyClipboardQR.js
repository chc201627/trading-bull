import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// @mui
import { Tooltip, TextField, IconButton, InputAdornment } from '@mui/material';
//
import Iconify from './Iconify';
import useTronLink from '../hooks/useTronLink';

// ----------------------------------------------------------------------

CopyClipboard.propTypes = {
  value: PropTypes.string,
};

export default function CopyClipboard({ value, show, ...other }) {
  const { enqueueSnackbar } = useSnackbar();
  const { trimAddress } = useTronLink();
  const [state, setState] = useState({
    value,
    copied: false,
  });

  const showValue = show ? trimAddress(value, 8) : '************************';
  const handleChange = (event) => {
    setState({ value: event.target.value, copied: false });
  };

  const onCopy = () => {
    setState({ ...state, copied: true });
    if (value) {
      enqueueSnackbar('Copied!');
    }
  };

  return (
    <TextField
      fullWidth
      value={showValue}
      onChange={handleChange}
      sx={{
        background: '#3366FF',
        border: '1px solid #3366FF',
        boxShadow: '0px 8px 16px rgba(51, 102, 255, 0.24)',
        borderRadius: '8px',
        color: '#ffffff',
        flex: 'none',
        order: 3,
        alignSelf: 'stretch',
        flexGrow: 0,
        textAlign: 'center',
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <CopyToClipboard text={value} onCopy={onCopy}>
              <Tooltip title="Copy">
                <IconButton>
                  <Iconify icon={'eva:copy-fill'} width={24} height={24} />
                </IconButton>
              </Tooltip>
            </CopyToClipboard>
          </InputAdornment>
        ),
      }}
      {...other}
    />
  );
}
