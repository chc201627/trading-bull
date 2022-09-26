import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Typography, Card, CardContent } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.lighter,

    [theme.breakpoints.up('md')]: {
        height: '100%',
        display: 'flex',
        textAlign: 'left',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}));

// ----------------------------------------------------------------------

AppSpots.propTypes = {
    action: PropTypes.node,
    description: PropTypes.string,
    img: PropTypes.node,
    title: PropTypes.string,
};

export default function AppSpots({ title, description, action, img, ...other }) {
    return (
        <RootStyle {...other}>
            <CardContent
                sx={{
                    p: { md: 0 },
                    pl: { md: 5 },
                    color: 'grey.0',
                }}
            >
                <Typography gutterBottom variant="h4" sx={{ whiteSpace: 'pre-line' }}>
                    {title}
                </Typography>

                <Typography variant="body2" sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 480, mx: 'auto' }}>
                    {description}
                </Typography>

                {action && action}
            </CardContent>

            {img && img}
        </RootStyle>
    );
}