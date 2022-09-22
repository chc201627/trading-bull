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
import { BankingWidgetSummary, WalletQRbalance } from '../../sections/@dashboard/general/wallet';

// ----------------------------------------------------------------------

export default function GeneralWallet() {
  const theme = useTheme();

  const { themeStretch } = useSettings();

  return (
    <Page title="General: Banking">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <WalletQRbalance list={_bankingCreditCard} />
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <BankingWidgetSummary
                title="Income"
                icon={'eva:diagonal-arrow-left-down-fill'}
                percent={2.6}
                total={18765}
                chartData={[111, 136, 76, 108, 74, 54, 57, 84]}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
