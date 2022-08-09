// @mui
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// components
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

export default function FaqsList() {

  return (
    <>
      {Array(8).fill(0).map((faq, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}
          >
            <Typography variant="subtitle1">{i}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{i}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
