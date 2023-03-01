import { useEffect, useState } from 'react';
// React
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Button, Typography, Divider } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
import useLocales from '../../hooks/useLocales';
import { Spot, Profit } from '../../middleware';
// _mock_
import { _appFeatured, _appAuthors, _appInstalled, _appRelated, _appInvoices } from '../../_mock';
// Routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Page from '../../components/Page';
import {
  BankingContacts,
  BankingWidgetSummary,
  BankingInviteFriends,
  BankingQuickTransfer,
  BankingCurrentBalance,
  BankingBalanceStatistics,
  BankingRecentTransitions,
  BankingExpensesCategories,
} from '../../sections/@dashboard/general/banking';
// sections
import {
  // AppWidget,
  AppNews,
  // AppFeatured,
  // AppWidgetSummary,
  // AppNewInvoice,
  // AppTopAuthors,
  // AppTopRelated,
  // AppAreaInstalled,
  // AppCurrentDownload,
  // AppTopInstalledCountries,
  AppAreaInstalled,
  AppWalletInformation,
  TradingInformationCard,
} from '../../sections/@dashboard/general/home';
// assets
import { MotivationIllustration } from '../../assets';

import TradingDeskCard from '../../components/TradingDeskCard';
// import { EcommerceYearlySales } from '../../sections/@dashboard/general/e-commerce';
// import { WalletQRbalance } from '../../sections/@dashboard/general/wallet';
import useTronLink from '../../hooks/useTronLink';

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { getCurrentWalletAddress, getUsdtBalance, trimAddress } = useTronLink();
  const { user } = useAuth();

  const theme = useTheme();
  const { translate } = useLocales();

  const { themeStretch } = useSettings();

  const [currency, setCurrency] = useState({
    value: 'USDT',
    label: '(TRON)',
  });
  const [totalEarning, setTotalEarning] = useState(' ');
  const [balance, setBalance] = useState('0');
  const [address, setAddress] = useState('');
  const [spotsInformation, setSpotsInformation] = useState([]);

  useEffect(() => {
    const address = getCurrentWalletAddress();
    setAddress(address);
    async function getTotalEaring() {
      const res = await Profit.totalEarnings();
      setTotalEarning(res);
    }

    async function getBalance() {
      const res = await getUsdtBalance(window.tronLink.tronWeb.defaultAddress.hex);
      const response = await Spot.getSpots();
      setSpotsInformation(response);
      const balance = parseInt(res?.data?._hex, 16);
      setBalance(balance);
    }

    getBalance();
    getTotalEaring();
  }, []);

  return (
    <Page title="General: App">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h6" sx={{ color: 'grey.500', mb: 2 }}>
          {translate('dashboard.home.news.title')}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <AppNews
              title={translate('dashboard.home.news.cardTitle')}
              description={translate('dashboard.home.news.cardContent')}
              img={
                <MotivationIllustration
                  sx={{
                    p: 3,
                    width: 320,
                    margin: { xs: 'auto', md: 'inherit' },
                  }}
                />
              }
              action={
                <RouterLink to={PATH_DASHBOARD.spot.all}>
                  <Button variant="contained">{translate('dashboard.home.news.action')}</Button>
                </RouterLink>
              }
              sx={{ backgroundColor: '#211D35', color: '#F6F6F6' }}
            />
          </Grid>

          <Grid item xs={12} lg={12} xl={12}>
            <BankingBalanceStatistics
              title={translate('dashboard.home.totalInvestmentsMonthly.title')}
              subheader="(+12% Yearly | +9% Monthly) than last year"
              chartLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
              chartData={[
                {
                  year: 2022,
                  data: [
                    { name: 'Monthly', data: [6.5, 6.1, 6.3, 4.4, 5.6, 7.9, 4.1, 8.6, 7, 8.8, 5.5, 3.9] },
                    { name: 'Yearly', data: [9.5, 9.1, 9.3, 7.4, 8.6, 10.9, 7.1, 11.6, 9, 10.8, 3.5, 5.9] },
                  ],
                },
                {
                  year: 2023,
                  data: [
                    { name: 'Monthly', data: [3.9, 4.5] },
                    { name: 'Yearly', data: [5.9, 6.5] },
                  ],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6} xl={4}>
            <TradingInformationCard totalEarning={totalEarning} />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <AppWalletInformation tron={{ currency, balance, address }} sx={{ backgroundColor: 'info' }} />
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Divider />

            <Typography py={2} variant="h5" sx={{ color: 'text.secondary' }}>
              {translate('dashboard.home.spots.title')}
            </Typography>
          </Grid>
          {spotsInformation ? (
            spotsInformation.map((spot) => (
              <>
                {spot.status === 'ACTIVE' ? (
                  <Grid item xs={12} md={4} lg={4} key={spot.id}>
                    <TradingDeskCard spot={spot} type={1} />
                  </Grid>
                ) : (
                  <> </>
                )}
                {spot.status === 'ACQUIRED' ? (
                  <Grid item xs={12} md={4} lg={4} key={spot.id}>
                    <TradingDeskCard spot={spot} type={2} />
                  </Grid>
                ) : (
                  <> </>
                )}
              </>
            ))
          ) : (
            <></>
          )}
          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentDownload
              title="Current Download"
              chartColors={[
                theme.palette.primary.lighter,
                theme.palette.primary.light,
                theme.palette.primary.main,
                theme.palette.primary.dark,
              ]}
              chartData={[
                { label: 'Mac', value: 12244 },
                { label: 'Window', value: 53345 },
                { label: 'iOS', value: 44313 },
                { label: 'Android', value: 78343 },
              ]}
            />
          </Grid>

          <Grid item xs={12} lg={8}>
            <AppNewInvoice
              title="New Invoice"
              tableData={_appInvoices}
              tableLabels={[
                { id: 'id', label: 'Invoice ID' },
                { id: 'category', label: 'Category' },
                { id: 'price', label: 'Price' },
                { id: 'status', label: 'Status' },
                { id: '' },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopRelated title="Top Related Applications" list={_appRelated} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopInstalledCountries title="Top Installed Countries" list={_appInstalled} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopAuthors title="Top Authors" list={_appAuthors} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3}>
              <AppWidget title="Conversion" total={38566} icon={'eva:person-fill'} chartData={48} />
              <AppWidget title="Applications" total={55566} icon={'eva:email-fill'} color="warning" chartData={75} />
            </Stack>
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
