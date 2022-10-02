import { Typography, Card, CardContent, Button, ButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',

    // [theme.breakpoints.up('md')]: {
    //     height: '100%',
    //     display: 'flex',
    //     textAlign: 'left',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    // },
}));

// ----------------------------------------------------------------------


AppTotalInvestments.propTypes = {
    title: PropTypes.string
}

export default function AppTotalInvestments({ title, ...other }) {
    return (
        <>
            <Typography variant='h6' sx={{ color: 'grey.500' }}>{title}</Typography>
            <RootStyle {...other}>
                <CardContent>
                    <Typography variant='h6'>{title}</Typography>
                </CardContent>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </RootStyle>
        </>
    )
}