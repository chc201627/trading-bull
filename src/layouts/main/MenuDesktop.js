import { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Link, Stack } from '@mui/material';
import { SettingsContext } from '../../contexts/SettingsContext';
import useLocales from '../../hooks/useLocales';
// components

// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },
}));

// ----------------------------------------------------------------------

MenuDesktop.propTypes = {
  navConfig: PropTypes.array,
};

export default function MenuDesktop({ navConfig }) {
  return (
    <Stack direction="row">
      {navConfig.map((link, i) => (
        <MenuDesktopItem key={link.title} item={link} index={i} />
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

MenuDesktopItem.propTypes = {
  index: PropTypes.number,
  item: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.array,
  }),
};

function MenuDesktopItem({ item, index }) {
  const { scrollToRef } = useContext(SettingsContext);
  const { pathname, hash } = useLocation();
  const { translate } = useLocales();
  const { title, path } = item;

  const isActive = (path) => pathname + hash === path;

  return (
    <LinkStyle
      to={path}
      onClick={() => scrollToRef(index)}
      component={RouterLink}
      end={path === '/'}
      sx={{
        ...(isActive(item.path) && { color: 'primary.lighter' }),
      }}
    >
      {translate(`clientNav.${title}`)}
    </LinkStyle>
  );
}

// ----------------------------------------------------------------------

IconBullet.propTypes = {
  type: PropTypes.oneOf(['item', 'subheader']),
};

function IconBullet({ type = 'item' }) {
  return (
    <Box sx={{ width: 24, height: 16, display: 'flex', alignItems: 'center' }}>
      <Box
        component="span"
        sx={{
          ml: '2px',
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'currentColor',
          ...(type !== 'item' && { ml: 0, width: 8, height: 2, borderRadius: 2 }),
        }}
      />
    </Box>
  );
}
