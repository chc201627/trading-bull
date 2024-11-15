import { useState } from 'react';
// @mui
import { MenuItem, Stack } from '@mui/material';
// hooks
import useLocales from '../../../hooks/useLocales';
// components
// import Image from '../../../components/Image';
import MenuPopover from '../../../components/MenuPopover';
import { IconButtonAnimate } from '../../../components/animate';
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const { allLangs, currentLang, onChangeLang } = useLocales();

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleChangeLang = (newLang) => {
    onChangeLang(newLang);
    handleClose();
  };

  return (
    <>
      <IconButtonAnimate
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          ...(open && { bgcolor: 'action.selected' }),
        }}
      >
        <Iconify icon={`circle-flags:${currentLang.value}`} width={20} height={20} />
      </IconButtonAnimate>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          mt: 1.5,
          ml: 0.75,
          width: 180,
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
      >
        <Stack spacing={0.75}>
          {allLangs.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLang.value}
              onClick={() => handleChangeLang(option.value)}
            >
              <Iconify icon={`circle-flags:${option.value}`} width={20} height={20} sx={{mr: 2}} />
              {/* <Image disabledEffect alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} /> */}

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </MenuPopover>
    </>
  );
}
