import { useState, useEffect } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Divider } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import useLocales from '../../hooks/useLocales';
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
import { EcommerceBestTransaction } from '../../sections/@dashboard/general/e-commerce';
import { Transaction } from '../../middleware';
// ----------------------------------------------------------------------

export default function GeneralWallet() {
  const navigate = useNavigate();
  const { translate } = useLocales();
  const { logout } = useAuth();
  const { getCurrentWalletAddress, getUsdtBalance, trimAddress } = useTronLink();

  const [currency, setCurrency] = useState({
    value: 'USDT',
    label: '(TRON)',
  });
  const [balance, setBalance] = useState('0');
  const [address, setAddress] = useState('');
  const [transactionTableData, setTransactionTableData] = useState([]);

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

  const getTransaction = async () => {
    const response = await Transaction.allTransactionsByUser();

    setTransactionTableData(response);
  };
  useEffect(() => {
    const address = getCurrentWalletAddress();
    setAddress(address);

    async function getBalance() {
      const res = await getUsdtBalance(window.tronLink.tronWeb.defaultAddress.hex);
      const balance = parseInt(res?.data?._hex, 16);
      setBalance(balance);
    }
    getTransaction();
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
        <Grid item xs={12} mt={3} mb={3}>
          <Divider sx={{ color: 'white' }} />
        </Grid>
        <Grid item xs={12} md={8}>
          <EcommerceBestTransaction
            title={translate('wallet.movements.title')}
            tableData={transactionTableData}
            tableLabels={[
              { id: 'Spot Value', label: translate('wallet.movements.spotValue') },
              { id: 'Spot Value', label: translate('wallet.movements.previousBalance') },
              { id: 'Hash', label: translate('wallet.movements.hash') },
              { id: 'Genereta', label: translate('wallet.movements.earnsGenerata') },
              { id: 'Earns Beneficiary', label: translate('wallet.movements.earnsBeneficiary') },
              { id: 'Earns Total', label: translate('wallet.movements.earnsTotal') },
              { id: 'Date of', label: translate('wallet.movements.transactionDate') },
              { id: 'Type', label: translate('wallet.movements.type'), align: 'right' },
            ]}
          />
        </Grid>
      </Container>
    </Page>
  );
}
