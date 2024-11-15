import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, Link, Alert, Collapse } from '@mui/material';
import { PATH_AUTH } from '../../routes/paths';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import cssStyles from '../../utils/cssStyles';
// config
import { HEADER } from '../../config';
// components
import Logo from '../../components/Logo';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';
import Iconify from '../../components/Iconify';
import useTronLink from '../../hooks/useTronLink';
import useAuth from '../../hooks/useAuth';
import useLocales from '../../hooks/useLocales';
import ChangeLanguaje from '../../components/ChangeLanguaje';
// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainHeader() {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);

  const theme = useTheme();

  const { currentLang, onChangeLang, translate } = useLocales();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isDesktop = useResponsive('up', 'md');

  const isHome = pathname === '/';

  const [tronLinkAlert, setTronLinkAlert] = useState(undefined);
  const [tronLinkReady, setTronLinkReady] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    hasTronLinkReady
  } = useTronLink();

  const { login } = useAuth();

  useEffect(() => {
    const isTronlinkReady = hasTronLinkReady();
    setTronLinkAlert(isTronlinkReady.status ? undefined : isTronlinkReady.message);
    setTronLinkReady(isTronlinkReady.status);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = async () => {
    setIsSubmitting(true);
    try {
      await login();
      navigate(PATH_AUTH.login);
    } catch (error) {
      setTronLinkAlert(error.message);
    }

    setIsSubmitting(false);
  }

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <Collapse in={tronLinkAlert}>
        <Alert
          severity="warning"
          variant='outlined'
          onClose={() => setTronLinkAlert(false)}

        >{tronLinkAlert}</Alert>
      </Collapse>

      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Logo />

          <Link href="https://docs-minimals.vercel.app/changelog" target="_blank" rel="noopener" underline="none">
            {/* <Label color="info" sx={{ ml: 1 }}>
              v3.5.0
            </Label> */}
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          {isDesktop && <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />}
          <Button
            variant="outlined"
            onClick={handleLogin}
            disabled={isSubmitting || !tronLinkReady}
            color='secondary'
          >
            {translate('clientNav.login')}
            <Iconify style={{ marginLeft: '0.5em' }} icon={'clarity:wallet-solid'} width={20} height={20} />
          </Button>

          <Button
            style={{ marginLeft: '2em' }}
            variant="contained"
            onClick={() => navigate(PATH_AUTH.register)}
            disabled={isSubmitting}
          >
            {translate('clientNav.signup')}
            <Iconify style={{ marginLeft: '0.5em' }} icon={'clarity:wallet-solid'} width={20} height={20} />
          </Button>

          {
            isDesktop &&
            <Box style={{ marginLeft: '2em' }}>
              <ChangeLanguaje />
            </Box>
          }

          {!isDesktop && <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />}
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
