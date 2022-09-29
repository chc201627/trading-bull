// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// hooks
import useSettings from '../../hooks/useSettings';
// routes
import { PATH_DASHBOARD, PATH_AUTH } from '../../routes/paths';
// hooks
import useAuth from '../../hooks/useAuth';
import useIsMountedRef from '../../hooks/useIsMountedRef';
// components
import Page from '../../components/Page';
// sections
import { TronNavigation, WalletQRbalance } from '../../sections/@dashboard/general/wallet';

// ----------------------------------------------------------------------

const _tronMock = {
  currency: {
    value: 'USDT',
    label: '(TRON)',
  },
  balance: '1,464.356',
  value: '0XD4FGFGHDHDBDFDGSDFGF...464GHGGHFGHGFDFE3R5',
};

export default function GeneralWallet() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const isMountedRef = useIsMountedRef();
  const { themeStretch } = useSettings();
  const handleLogout = async () => {
    try {
      await logout();
      navigate(PATH_AUTH.login, { replace: true });

      // if (isMountedRef.current) {
      //   handleClose();
      // }
    } catch (error) {
      console.error(error);
      // enqueueSnackbar('Unable to logout!', { variant: 'error' });
    }
  };

  return (
    <Page title="General: Wallet">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <WalletQRbalance tron={_tronMock} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TronNavigation
              link="https://tronscan.org/#/address/TK31z3tznepy4DRKk7v2vQGkLqZ2Q6yZUW"
              handleLogout={handleLogout}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
