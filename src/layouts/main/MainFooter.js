import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Logo from '../../components/Logo';
import SocialsButton from '../../components/SocialsButton';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Minimal',
    children: [
      { name: 'About us', href: PATH_PAGE.about },
      { name: 'Contact us', href: PATH_PAGE.contact },
      { name: 'FAQs', href: PATH_PAGE.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    headline: 'Contact',
    children: [
      { name: 'support@minimals.cc', href: '#' },
      { name: 'Los Angeles, 359  Hidden Valley Road', href: '#' },
    ],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />

      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'center' }}
          sx={{ textAlign: { xs: 'center', md: 'center' } }}
        >
          <Grid item xs={12} sx={{ mb: 3, textAlign: { xs: 'auto', md: 'auto' }, width: '100%' }}>
            <Logo sx={{ mx: { xs: 'auto', md: 'auto' } }} svgWidth={100} />
          </Grid>

          <Grid item xs={8} md={3} justifyContent={{ xs: 'center', md: 'center' }}>
            <Typography variant="body2" sx={{  }}>
            This website is not directed at any jurisdiction and is not intended for any use that would be contrary to local law or regulation.
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'center' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              <SocialsButton sx={{ mx: 0.5 }} justifyContent={{ xs: 'center', md: 'center' }} />
            </Stack>
          </Grid>
          
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'center',  },
          }}
        >
          © 2022. All rights reserved
        </Typography>
      </Container>
    </RootStyle>
  );
}
