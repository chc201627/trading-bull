import { Typography, Card, CardContent, Button, ButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
// Hooks
import { useState } from 'react';
import useLocales from '../../../../hooks/useLocales';
// ----------------------------------------------------------------------


const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
}));


// ----------------------------------------------------------------------


AppTotalInvestments.propTypes = {
    title: PropTypes.string
}

export default function AppTotalInvestments({ title, ...other }) {

    const { translate} = useLocales();

    const timePeriods = translate('dashboard.home.totalInvestments.periods', {returnObjects: true});

    const [selectedPeriod, setSelectedPeriod] = useState(0);

    return (
        <>
            <Typography variant='h6' sx={{ color: 'grey.500', mb:2 }}>{title}</Typography>
            <RootStyle {...other}>
                <CardContent>
                    <ButtonGroup aria-label="outlined button group">
                        {
                            timePeriods.map((period, i) => (
                                <Button 
                                    sx={{fontSize:13}}
                                    variant={selectedPeriod === i ? 'contained': 'outlined'}
                                    key={`${i}-${period}`}
                                    onClick={()=> setSelectedPeriod(i)}
                                >
                                    {period}
                                </Button>
                            ))
                        }
                    </ButtonGroup>
                </CardContent>
            </RootStyle>
        </>
    )
}