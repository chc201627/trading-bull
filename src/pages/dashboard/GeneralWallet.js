import { useState, useEffect } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Divider } from '@mui/material';
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
import { EcommerceBestSalesman } from '../../sections/@dashboard/general/e-commerce';
import { ReferralCode } from '../../middleware';
// ----------------------------------------------------------------------

export default function GeneralWallet() {
  const navigate = useNavigate();

  const { logout } = useAuth();
  const { getCurrentWalletAddress, getUsdtBalance, trimAddress } = useTronLink();

  const [currency, setCurrency] = useState({
    value: 'USDT',
    label: '(TRON)',
  });
  const [balance, setBalance] = useState('0');
  const [address, setAddress] = useState('');
  const [spotTableData, setspotTableData] = useState([]);

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

  const getCountRefers = async () => {
    const response = await ReferralCode.getTotalReferrals();
    const responseTable = await ReferralCode.getTableReferrals();
    console.log(responseTable);
    const table = responseTable.map((refer) => ({
      id: refer.id,
      money: refer.money_return,
      spot: refer.spot_value,
      status: refer.status,
      enable: refer.enabled_before_at,
      off: refer.off_date,
    }));

    setspotTableData(table);
  };
  useEffect(() => {
    const address = getCurrentWalletAddress();
    setAddress(address);

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
        <Grid item xs={12} mt={3} mb={3}>
          <Divider sx={{ color: 'white' }} />
        </Grid>
        <Grid item xs={12} md={8}>
          <EcommerceBestSalesman
            title="Movements"
            tableData={spotTableData}
            tableLabels={[
              { id: 'Spot', label: 'Spot' },
              { id: 'Actual Balance', label: 'Actual Balance' },
              { id: 'spot', label: 'Spot value' },
              { id: 'Generate', label: 'Generate' },
              { id: 'Type', label: 'Type' },
              { id: 'Transaction_hash', label: 'Transaction_hash' },
            ]}
          />
        </Grid>
      </Container>
    </Page>
  );
}
