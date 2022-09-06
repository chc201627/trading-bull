import { m } from 'framer-motion';
// @mui
import { Button, Typography, TextField, Stack } from '@mui/material';
//
import { varFade, MotionViewport } from '../../../components/animate';
// hooks
import useLocales from '../../../hooks/useLocales'
// ----------------------------------------------------------------------

export default function FaqsForm() {

  const { translate } = useLocales();

  return (
    <Stack component={MotionViewport} spacing={3}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h4">
          {translate('home.faqs.form.need_help')}
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <TextField fullWidth label={translate('home.faqs.form.name')} />
      </m.div>

      <m.div variants={varFade().inUp}>
        <TextField fullWidth label={translate('home.faqs.form.email')} />
      </m.div>

      <m.div variants={varFade().inUp}>
        <TextField fullWidth label={translate('home.faqs.form.subject')} />
      </m.div>

      <m.div variants={varFade().inUp}>
        <TextField fullWidth label={translate('home.faqs.form.enter_message')} multiline rows={4} />
      </m.div>

      <m.div variants={varFade().inUp}>
        <Button size="large" variant="contained">
          {translate('home.faqs.form.submit')}
        </Button>
      </m.div>
    </Stack>
  );
}
