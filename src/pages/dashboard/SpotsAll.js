import React from 'react'
import { useNavigate } from 'react-router'
import PropTypes from 'prop-types'
// @mui
import { Button, Card, Container, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
// Hooks
import useLocales from '../../hooks/useLocales';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import SpotInvest from '../../sections/@dashboard/spot/SpotInvest';

//-----------------------------------------------
const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    padding: '2rem',
    marginTop: '1rem'
}));



//-----------------------------------------------
export default function SpotsAll(props) {

    const navigate = useNavigate()
    const { translate } = useLocales()
    const { themeStretch } = useSettings();

    return (
        <Page title="Spots: All">
            <Container maxWidth={themeStretch ? false : 'xl'}>
                <Button
                    variant='outlined'
                    onClick={() => navigate(-1)}
                    startIcon={<Iconify icon='akar-icons:chevron-left' />}
                >
                    {translate('goBack')}
                </Button>
                <RootStyle>
                    <Grid container>
                        <Grid item xs={12} md={6} lg={4}>
                            <></>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <SpotInvest />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <></>
                        </Grid>
                    </Grid>
                </RootStyle>
            </Container>
        </Page>
    )
}

SpotsAll.propTypes = {}

