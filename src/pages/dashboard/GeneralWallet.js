// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Stack } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// _mock_
import { _bankingContacts, _bankingCreditCard, _bankingRecentTransitions } from '../../_mock';
// components
import Page from '../../components/Page';
// sections
import { TronNavigation, WalletQRbalance } from '../../sections/@dashboard/general/wallet';

// ----------------------------------------------------------------------

export default function GeneralWallet() {
  const theme = useTheme();

  const { themeStretch } = useSettings();

  return (
    <Page title="General: Wallet">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <WalletQRbalance list={_bankingCreditCard} />
          </Grid>
          <Grid item xs={12} md={5}>
            <TronNavigation link="Income" logout={'eva:diagonal-arrow-left-down-fill'} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
