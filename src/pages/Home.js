import { useContext, useRef, useEffect } from 'react';
// @mui
import { Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
// sections
import {
  HomeHero,
  ScopeData,
  Spots,
  Blockchain,
  Invest,
  RefererProgram,
  FaqsForm,
  FaqsList
} from '../sections/home';
import { SettingsContext } from '../contexts/SettingsContext';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {

  const { setNavRefs } = useContext(SettingsContext);

  const homeRef = useRef();
  const aboutRef = useRef();
  const faqsRef = useRef();


  useEffect(() => {
    if (homeRef.current && aboutRef.current && faqsRef.current) {
      setNavRefs([homeRef, aboutRef, faqsRef]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [homeRef, aboutRef, faqsRef])


  return (
    <Page title="The starting point for your next project" ref={homeRef}>
      <HomeHero />
      <ContentStyle >
        <ScopeData />
        <div ref={aboutRef}>
          <Blockchain />
        </div>
        <Spots />
        <Invest />
        <RefererProgram />
        <div ref={faqsRef}>{}</div>
        <Container sx={{ mt: 15, mb: 10, position: 'relative' }}>
          <Typography variant="h3" sx={{ mb: 5 }}>
            Frequently asked questions
          </Typography>

          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <FaqsList />
            </Grid>
            <Grid item xs={12} md={6}>
              <FaqsForm />
            </Grid>
          </Grid>
        </Container>
      </ContentStyle>
    </Page>
  );
}
