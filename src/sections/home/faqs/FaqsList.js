// @mui
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// components
import Iconify from '../../../components/Iconify';
// hooks
import useLocales from '../../../hooks/useLocales';

// ----------------------------------------------------------------------

export default function FaqsList() {

  const { translate }= useLocales();

  const faqs = translate('home.faqs.questions', {returnObjects: true});

  return (
    <>
      {faqs.map((faq, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}
          >
            <Typography variant="subtitle1">{faq.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
