import { useState, useEffect } from 'react';

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
import useTronLink from '../../hooks/useTronLink';

// ----------------------------------------------------------------------

export default function GeneralWallet() {
  const navigate = useNavigate();

  const { logout } = useAuth();
  const { getCurrentWalletAddress, getUsdtBalance } = useTronLink();

  const [currency, setCurrency] = useState({
    value: 'USDT',
    label: '(TRON)',
  });
  const [balance, setBalance] = useState('0');
  const [address, setAddress] = useState('');

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
  useEffect(() => {
    async function getAddress() {
      const address = await getCurrentWalletAddress();
      setAddress(address);
    }
    getAddress();
  }, []);
  useEffect(() => {
    async function getBalance() {
      const res = await getUsdtBalance(window.tronLink.tronWeb.defaultAddress.hex);
      const balance = parseInt(res?.data?._hex, 16);
      setBalance(balance);
    }
    getBalance();
  }, []);
  return (
    <Page title="General: Wallet">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <WalletQRbalance tron={{ currency, balance, address }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TronNavigation link={`https://tronscan.org/#/address/${address}`} handleLogout={handleLogout} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
