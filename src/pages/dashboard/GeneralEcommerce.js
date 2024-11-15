import { useEffect, useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Divider, Typography, Stack } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// _mock_
import {
  _ecommerceNewProducts,
  _ecommerceSalesOverview,
  _ecommerceBestSalesman,
  _ecommerceLatestProducts,
} from '../../_mock';
// components
import Page from '../../components/Page';
import useLocales from '../../hooks/useLocales';
// sections
import {
  EcommerceNewProducts,
  EcommerceYearlySales,
  EcommerceBestSalesman,
  EcommerceSaleByGender,
  EcommerceWidgetSummary,
  EcommerceSalesOverview,
  EcommerceLatestProducts,
  EcommerceCurrentBalance,
} from '../../sections/@dashboard/general/e-commerce';
import { AppWelcome } from '../../sections/@dashboard/general/home';
// assets
import { MotivationIllustration } from '../../assets';
import { ReferralCode } from '../../middleware';

// ----------------------------------------------------------------------

export default function GeneralEcommerce() {
  const { translate } = useLocales();
  const [totalReferrals, settotalReferrals] = useState(0);
  const [referralCode, setReferralCode] = useState('');
  const [toalReturnReferrals, settotalReturnReferrals] = useState(0);
  const [spotTableData, setspotTableData] = useState([]);
  const { user } = useAuth();
  const theme = useTheme();
  const { themeStretch } = useSettings();

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
    settotalReferrals(response.totalReferrals);
    settotalReturnReferrals(response.totalReturnReferrals);
  };

  const createReferralCode = async () => {
    const createCode = await ReferralCode.create({ data: {} });
    setReferralCode(createCode.data.attributes.code);
    await navigator.clipboard.writeText(createCode.data.attributes.code);

    alert('Code Copied');
  };

  const createReferralLink = async () => {
    // const createCode = await ReferralCode.create({data:{}})
    // await navigator.clipboard.writeText(createCode.data.attributes.code);
    // alert('Link Copied');
    const domain = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/auth/register`;
  };
  useEffect(() => {
    getCountRefers();
  }, []);

  return (
    <Page title="Refers">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between">
              <Typography sx={{ fontSize: 20 }}>{translate('refers.refer_program')}</Typography>
              {/* <Button variant="contained"> Share in social web</Button> */}
            </Stack>
          </Grid>
          {/* <Grid item xs={12} md={12}>
            <AppWelcome
              title={`Congratulations! \n ${user?.displayName}`}
              description="Best seller of the month You have done 57.6% more sales today."
              img={
                <MotivationIllustration
                  sx={{
                    p: 3,
                    width: 360,
                    margin: { xs: 'auto', md: 'inherit' },
                  }}
                />
              }
              action={<Button variant="contained">Go Now</Button>}
            />
          </Grid> 
          
          <Grid item xs={12} md={4}>
            <EcommerceNewProducts list={_ecommerceNewProducts} />
          </Grid>

          <Grid item xs={12} md={4}>
            <EcommerceWidgetSummary
              title="Product Sold"
              percent={2.6}
              total={765}
              chartColor={theme.palette.primary.main}
              chartData={[22, 8, 35, 50, 82, 84, 77, 12, 87, 43]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <EcommerceWidgetSummary
              title="Total Balance"
              percent={-0.1}
              total={18765}
              chartColor={theme.palette.chart.green[0]}
              chartData={[56, 47, 40, 62, 73, 30, 23, 54, 67, 68]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <EcommerceWidgetSummary
              title="Sales Profit"
              percent={0.6}
              total={4876}
              chartColor={theme.palette.chart.red[0]}
              chartData={[40, 70, 75, 70, 50, 28, 7, 64, 38, 27]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EcommerceSaleByGender
              title="Sale By Gender"
              total={2324}
              chartData={[
                { label: 'Mens', value: 44 },
                { label: 'Womens', value: 75 },
              ]}
              chartColors={[
                [theme.palette.primary.light, theme.palette.primary.main],
                [theme.palette.warning.light, theme.palette.warning.main],
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <EcommerceYearlySales
              title="Yearly Sales"
              subheader="(+43%) than last year"
              chartLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']}
              chartData={[
                {
                  year: '2019',
                  data: [
                    { name: 'Total Income', data: [10, 41, 35, 151, 49, 62, 69, 91, 48] },
                    { name: 'Total Expenses', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                  ],
                },
                {
                  year: '2020',
                  data: [
                    { name: 'Total Income', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
                    { name: 'Total Expenses', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
                  ],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <EcommerceSalesOverview title="Sales Overview" data={_ecommerceSalesOverview} />
          </Grid> */}

          <Grid item xs={12}>
            <EcommerceCurrentBalance
              title="Current Balance"
              totalReferrals={totalReferrals}
              toalReturnReferrals={toalReturnReferrals}
              createReferralCode={createReferralCode}
              createReferralLink={createReferralLink}
              referralCode={referralCode}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ color: 'white' }} />
          </Grid>

          <Grid item xs={12}>
            <EcommerceBestSalesman
              title={translate('refers.referredDetails.title')}
              tableData={spotTableData}
              tableLabels={[
                { id: 'id', label: translate('refers.referredDetails.id') },
                { id: 'money', label: translate('refers.referredDetails.expectReturned') },
                { id: 'spot', label: translate('refers.referredDetails.spotValue') },
                { id: 'enable', label: translate('refers.referredDetails.enbaleDate') },
                { id: 'off', label: translate('refers.referredDetails.offDate') },
                { id: 'status', label: translate('refers.referredDetails.status'), align: 'right' },
              ]}
            />
          </Grid>
          {/* <Grid item xs={12} md={6} lg={4}>
            <EcommerceLatestProducts title="Latest Products" list={_ecommerceLatestProducts} />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
