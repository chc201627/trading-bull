import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography, Divider, Alert, Button } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
import useLocales from '../../hooks/useLocales';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Page from '../../components/Page';
import Logo from '../../components/Logo';
import Image from '../../components/Image';
// sections
import { RegisterForm } from '../../sections/auth/register';
import ChangeLanguaje from '../../components/ChangeLanguaje';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  const { translate } = useLocales();

  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Register">
      <RootStyle>
        <HeaderStyle>
          <Logo />
          {smUp && (
            <Box display="flex" alignItems="center">
              <Typography variant="body2">
                Already have an account? {''}
                <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.login}>
                  Login
                </Link>
              </Typography>
              <Box sx={{ ml: 2 }}>
                <ChangeLanguaje />
              </Box>
            </Box>
          )}
        </HeaderStyle>

        {mdUp && (
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              {translate('register.pageCaption')}
            </Typography>
            <Image
              visibleByDefault
              disabledEffect
              alt="register"
              src="/assets/illustrations/illustration_register.png"
            />
          </SectionStyle>
        )}

        <Container>
          <ContentStyle>
            <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                  {translate('register.title')}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>{translate('register.description')}</Typography>
              </Box>
            </Box>

            <Divider />

            <Alert severity="info" sx={{ mt: 2, mb: 2 }}>
              {translate('register.faqs')}
              <Button color="inherit" variant="outlined" size="small" sx={{ ml: 1 }}>
                {translate('register.goToFaqs')}
              </Button>
            </Alert>

            <Divider sx={{ mt: 2, mb: 2 }} />

            <RegisterForm />

            <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
              By registering, I agree to Streak Bull&nbsp;
              <Link underline="always" color="text.primary" href="#">
                Terms of Service &nbsp;
              </Link>
              {''}and{''}&nbsp;
              <Link underline="always" color="text.primary" href="#">
                Disclaimer Conditions
              </Link>
              .
            </Typography>

            {!smUp && (
              <>
                <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                  Already have an account?{' '}
                  <Link variant="subtitle2" to={PATH_AUTH.login} component={RouterLink}>
                    Login
                  </Link>
                </Typography>
                <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                  <ChangeLanguaje />
                </Box>
              </>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
