import React from 'react'
import PropTypes from 'prop-types'
// @mui
import {
    Dialog,
    Card,
    Grid,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Alert,
    Button,
    Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

// Hooks
import useLocales from '../../../hooks/useLocales';

// components
import Iconify from '../../../components/Iconify';

SpotInvestModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func
}

PendingAction.propTypes = {
    onClose: PropTypes.func
}

const RootStyle = styled(Card)(({ theme }) => ({
    background: theme.palette.grey[900],
    boxShadow: 'none',
    padding: '2rem',
    [theme.breakpoints.down('sm')]: {
        width: '20rem'
    },
    [theme.breakpoints.up('sm')]: {
        width: '30rem'
    },
}));

const PendingAction = (props) => {

    const { onClose } = props

    const { translate } = useLocales();

    return (
        <>
            <Grid container>
                <Grid item sm={12} >
                    <Typography variant='h3' textAlign='center' >
                        {translate('dashboard.spot.please_confirm')}
                    </Typography>
                </Grid>

                <Grid item xs={6} mt={2} container justifyContent='flex-start' alignItems='center' >
                    <Typography variant='subtitle2' sx={{ color: 'text.disabled' }}>
                        {translate('dashboard.spot.amount_to_invest')}:
                    </Typography>
                </Grid>
                <Grid item xs={6} mt={2} container justifyContent='flex-end' >
                    <TextField
                        label={translate('dashboard.spot.investment_value')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Iconify icon='cryptocurrency:usdt' />
                                </InputAdornment>
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={4} mt={2} container justifyContent='flex-start' alignItems='center' >
                    <Typography variant='subtitle2' sx={{ color: 'text.disabled' }}>
                        {translate('dashboard.spot.block_periods')}
                    </Typography>
                </Grid>
                <Grid item xs={8} mt={2} container justifyContent='space-around' alignItems='center' >
                    <FormControlLabel control={<Checkbox defaultChecked />} label={translate('dashboard.spot.month')} />
                    <FormControlLabel control={<Checkbox />} label={translate('dashboard.spot.year')} />
                </Grid>

                <Grid item sm={12} >
                    <Typography variant='subtitle2' textAlign='center' mt={3} >
                        {translate('dashboard.spot.total_to_pay')}
                    </Typography>
                </Grid>
                <Grid item sm={12} >
                    <Typography variant='h3' textAlign='center' >
                        {`$1.025 USDT`}
                    </Typography>
                </Grid>

                <Grid item sm={12} >
                    <Alert
                        variant='outlined'
                        sx={{ mt: 1, backgroundColor: 'info.lighter', color: 'info.darker' }}
                        severity='info'
                    >
                        {translate('dashboard.spot.commision_alert')}
                    </Alert>
                </Grid>

                <WalletInfo />


                <Grid item sm={12}>
                    <Button 
                        sx={{ my: 2 }} 
                        variant='outlined' 
                        fullWidth
                        onClick={()=> onClose()}
                    >
                        {translate('goBack')}
                    </Button>
                    <Button variant='contained' fullWidth>
                        {translate('dashboard.spot.make_you_invest')}
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

const ConfirmingAction = () => {
    const { translate } = useLocales();

    return (
        <Grid container>
            <Grid item sm={5.5}>
                <Typography variant='h3' textAlign='right' >
                    15
                </Typography>
                <Typography textAlign='right' variant='subtitle2' sx={{ color: 'text.disabled' }}>
                    {translate('dashboard.spot.minutes')}
                </Typography>
            </Grid>
            <Grid item sm={1}>
                <Typography variant='h3' textAlign='center' >
                    :
                </Typography>
            </Grid>
            <Grid item sm={5.5}>
                <Typography variant='h3' textAlign='left' >
                    15
                </Typography>
                <Typography variant='subtitle2' sx={{ color: 'text.disabled' }}>
                    {translate('dashboard.spot.seconds')}
                </Typography>
            </Grid>
            <Grid item sm={12}>
                <Typography variant='subtitle2' textAlign='center'>
                    {translate('dashboard.spot.time_remaining')}
                </Typography>
            </Grid>
            <Grid item sm={12}>
                <Alert
                    variant='outlined'
                    sx={{ mt: 1, backgroundColor: 'warning.lighter', color: 'warning.darker' }}
                    severity='warning'
                >
                    {translate('dashboard.spot.have_issue')}
                </Alert>
            </Grid>
            <Grid item sm={12} >
                <Typography variant='subtitle2' textAlign='center' mt={3} >
                    {translate('dashboard.spot.your_invert')}
                </Typography>
            </Grid>
            <Grid item sm={12} >
                <Typography variant='h3' textAlign='center' >
                    {`$1.025 USDT`}
                </Typography>
            </Grid>

            <WalletInfo />

            <Grid item sm={12}>
                <Button sx={{ my: 2 }} variant='contained' fullWidth color='error'>
                    {translate('dashboard.spot.cancel_order')}
                </Button>
                <Button variant='contained' fullWidth>
                    {translate('invest')}
                </Button>
            </Grid>
        </Grid>
    )
}

const ConfirmedAction = () => {
    const { translate } = useLocales();
    return (
        <Grid container>
            <Grid item sm={12} >
                <Typography variant='h3' textAlign='center' >
                    {translate('dashboard.spot.investment_sent')}
                </Typography>
                <Typography variant='body1' sx={{ color: 'text.disabled' }} >
                    {translate('dashboard.spot.confirm_message')}
                </Typography>

            </Grid>
            <Grid item sm={12} >
                <Typography variant='subtitle2' textAlign='center' mt={3} >
                    {translate('dashboard.spot.your_invert')}
                </Typography>
            </Grid>
            <Grid item sm={12} >
                <Typography variant='h3' textAlign='center' >
                    {`$1.025 USDT`}
                </Typography>
            </Grid>
            <WalletInfo />
            <Button sx={{ my: 2 }} variant='contained'  fullWidth>
                {translate('dashboard.spot.return_profile')}
            </Button>
        </Grid>
    )
}

const CancelledAction = () => {
    const { translate } = useLocales();
    return (
        <Grid container >
            <Grid item sm={12} >
                <Typography variant='h3' textAlign='center' >
                    { translate('dashboard.spot.cancelled_title')}
                </Typography>
            </Grid>

            <WalletInfo />
            <Button sx={{ my: 2 }} variant='contained' color='info' fullWidth>
                {translate('dashboard.spot.send_return_profile')}
            </Button>
            <Button variant='contained' fullWidth>
                {translate('dashboard.spot.return_profile')}
            </Button>
        </Grid>
    )
}

const WalletInfo = () => {
    const { translate } = useLocales();
    return (<>
        <Grid item xs={4} mt={2} container justifyContent='flex-start' alignItems='center' >
            <Typography variant='subtitle2' sx={{ color: 'text.disabled' }}>
                {translate('wallet.wallet')} :
            </Typography>
        </Grid>
        <Grid item xs={8} mt={2} container justifyContent='flex-end' alignItems='center' >
            <Typography variant='body2'>
                480C9b...
            </Typography>
        </Grid>

        <Grid item xs={4} mt={2} container justifyContent='flex-start' alignItems='center' >
            <Typography variant='subtitle2' sx={{ color: 'text.disabled' }}>
                {translate('wallet.wallet_status')} :
            </Typography>
        </Grid>
        <Grid item xs={8} mt={2} container justifyContent='flex-end' alignItems='center' >
            <Chip
                label={translate('wallet.status.connected')}
                color='success'
                sx={{ borderRadius: 1, fontWeight: 700 }}
            />
        </Grid>

        <Grid item xs={4} mt={2} container justifyContent='flex-start' alignItems='center' >
            <Typography variant='subtitle2' sx={{ color: 'text.disabled' }}>
                {translate('wallet.destination')} :
            </Typography>
        </Grid>
        <Grid item xs={8} mt={2} container justifyContent='flex-end' alignItems='center' >
            <Typography variant='body2'>
                480C9b...
            </Typography>
        </Grid>

        <Grid item xs={4} mt={2} container justifyContent='flex-start' alignItems='center' >
            <Typography variant='subtitle2' sx={{ color: 'text.disabled' }}>
                {translate('wallet.network')} :
            </Typography>
        </Grid>
        <Grid item xs={8} mt={2} container justifyContent='flex-end' alignItems='center' >
            <Typography variant='body2'>
                480C9b...
            </Typography>
        </Grid>
    </>)
}

export default function SpotInvestModal(props) {
    const {
        isOpen,
        onClose
    } = props;
    return (
        <Dialog open={isOpen} onClose={onClose} >
            <RootStyle>
                <PendingAction onClose={onClose} />
                {/* <ConfirmingAction /> */}
                {/* <ConfirmedAction /> */}
                {/* <CancelledAction /> */}
            </RootStyle>
        </Dialog>
    )
}


