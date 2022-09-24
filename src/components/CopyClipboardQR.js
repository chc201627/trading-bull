import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// @mui
import { Tooltip, TextField, IconButton, InputAdornment } from '@mui/material';
//
import Iconify from './Iconify';

// ----------------------------------------------------------------------

CopyClipboard.propTypes = {
  value: PropTypes.string,
};

export default function CopyClipboard({ value, ...other }) {
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({
    value,
    copied: false,
  });

  const handleChange = (event) => {
    setState({ value: event.target.value, copied: false });
  };

  const onCopy = () => {
    setState({ ...state, copied: true });
    if (state.value) {
      enqueueSnackbar('Copied!');
    }
  };

  return (
    <TextField
      fullWidth
      value={state.value}
      onChange={handleChange}
      sx={{
        background: '#4A176E',
        border: '1px solid #3366FF',
        boxShadow: '0px 8px 16px rgba(51, 102, 255, 0.24)',
        borderRadius: '8px',
        color: '#fff',
        flex: 'none',
        order: 3,
        alignSelf: 'stretch',
        flexGrow: 0,
        textAlign: 'center',
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <CopyToClipboard text={state.value} onCopy={onCopy}>
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
