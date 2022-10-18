import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// @mui
import {
  Box,
  Card,
  Stack,
  Button,
  Divider,
  TextField,
  CardHeader,
  Typography,
  CardContent,
  InputAdornment,
  Chip,
  Switch,
  Alert
} from '@mui/material';
// utils
import useTronLink from '../hooks/useTronLink';
// components
import { fCurrency } from '../utils/formatNumber';
import Iconify from './Iconify'

// ----------------------------------------------------------------------

TradingDeskCard.propTypes = {
  total: PropTypes.number,
  discount: PropTypes.number,
  subtotal: PropTypes.number,
  shipping: PropTypes.number,
  onEdit: PropTypes.func,
  enableEdit: PropTypes.bool,
  onApplyDiscount: PropTypes.func,
  enableDiscount: PropTypes.bool,
};





export default function TradingDeskCard({
  total,
  onEdit,
  discount,
  subtotal,
  shipping,
  onApplyDiscount,
  enableEdit = false,
  enableDiscount = false,
  type,
  spot,
}) {
  const displayShipping = shipping !== null ? 'Free' : '-';
  const date= new Date(spot.createdAt)
  const dateac= new Date(spot.enabled_before_at)
  const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
    hour12: false,
  };
  const optionsTime = {
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
  };

  const dateReturn = new Date()
  if (dateReturn.getMonth()+1>12){
    dateReturn.setMonth(1)
  }else{
    dateReturn.setMonth(dateReturn.getMonth()+1)
  }
  dateReturn.setDate(1)
//   logic next payment
  const dateNow = new Date().toLocaleDateString("default", {
    "month": "numeric"
});

  const { getCurrentWalletAddress, getUsdtBalance, trimAddress } = useTronLink();
  const [address, setAddress] = useState('');
  

  useEffect(() => {
    const address = getCurrentWalletAddress();
    setAddress(address);
  }, []);

  const Card1 = () => {
    return(
        <>

            <Stack direction="row" justifyContent="space-between">             
                <Stack direction="column" justifyContent="space-between">
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                        Expected Bonus
                    </Typography>

                    <Stack direction="row">
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}> Next payment at: &nbsp;  </Typography>

                        <Typography variant="body2" sx={{ color: 'text.primary' }}>{Intl.DateTimeFormat('default').format(dateReturn)}</Typography> 
                    </Stack>
                        
                </Stack>
                <Typography variant="h4" sx={{ color: 'text.primary' }}>
                    $ 0
                </Typography> 
            </Stack>
            <Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {'Deposit Wallet : '  }{' '}
                    </Typography>
                    <Typography variant="body1"> &nbsp; {`${address.substr(0, 6)}...${address.substr(-6)}`}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {'ROI : '  }{' '}
                    </Typography>
                    <Typography variant="body1"> &nbsp; 8%</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {'Investment type : '  }{' '}
                    </Typography>
                    <Typography variant="body1"> &nbsp; TRADING</Typography>
                </Stack>
            </Stack>

            <Stack direction="row" justifyContent="space-between">             
                <Stack direction="column" justifyContent="space-around">
                    

                    <Stack direction="column" justifyContent="center">
                        <Switch />

                        <Typography align="center" variant="body2" sx={{ color: 'text.primary' }}>
                        Reinvest Mode
                        </Typography> 
                    </Stack>
                        
                </Stack>
                <Alert severity="info">
                    The Deposits will go directly to you wallet
                    
                </Alert> 
            </Stack>
                    </>

    )
}

const Card2 = () => {
    return(
        <> 
            <Stack direction="column" justifyContent='center'>
                <Typography align='center' variant='h4'>{Intl.DateTimeFormat('default', options).format(dateac)}</Typography>
                <Typography align='center' variant='body2' sx={{ color: 'text.secondary' }}>
                    Activation date: {Intl.DateTimeFormat().format(dateac)}
                    </Typography>
            </Stack>
            <Stack direction="column" justifyContent='center'>
                <Typography align='center' variant='h4'>{Intl.DateTimeFormat('default', optionsTime).format(dateac)}</Typography>
                <Typography align='center' variant='body2' sx={{ color: 'text.secondary', }}>Time</Typography>
            </Stack>

            <Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {'Rentability : '  }{' '}
                    </Typography>
                    <Typography variant="body1"> &nbsp; 0% - 13%</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {'Investment type : '  }{' '}
                    </Typography>
                    <Typography variant="body1"> &nbsp; TRADING</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {'Sector : '  }{' '}
                    </Typography>
                    <Typography variant="body1"> &nbsp; Indices - Forex - Crypto</Typography>
                </Stack>
            </Stack>
                    </>

    )
}



const Card3 = () => {
    return(
        <> 
            <Stack direction="column" justifyContent='center'>
                <Typography align='center' variant='h4'>06 / 12 / 2022 16:45 PM</Typography>
            </Stack>
            <Stack direction="column">
                <Typography  variant='body2'>Bonus amount has been send to reference wallet above. For any issue contact our customer services</Typography>
            </Stack>
            <Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {'Payment Hash : '  }{' '}
                    </Typography>
                    <Typography variant="body1"> &nbsp; P245GHAH...JHATFAT</Typography>
                </Stack>               
            </Stack>

            <Button variant='contained'>See details </Button>
                    </>

    )
}

const typeCard ={
    1:<Card1/>,
    2:<Card2/>,
    3:<Card3/>
}
  return (
    <Card sx={{ mb: 3 }}>
      
      <CardContent>
        <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between">

                
                <Stack direction="column" justifyContent="space-between">
                    <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                        Deposit: {Intl.DateTimeFormat().format(date)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Trading
                    </Typography>       
                </Stack>
                <Chip variant="filled"  label="Blocked" color='info'/>
            </Stack>

        <Stack direction="row" justifyContent="flex-start">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {'Block Type : '  }{' '}
            </Typography>
        <Typography variant="subtitle2"> &nbsp; Month</Typography>
          </Stack>


          <Stack direction="row" justifyContent="space-between">
                <Stack direction="column" justifyContent="space-between">
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                        Invest Value
                    </Typography>
                    <Typography variant="h4"  sx={{ color: 'text.primary' }}>{spot.spot_value} USDT</Typography>      
                </Stack>
                <Typography color={spot.status==="ACTIVE"?'green':'purple'} variant="h5">
                       {spot.status}
                    </Typography>
                
            </Stack>

            <Stack direction="row" justifyContent="flex-start">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {'Hash : '  }{' '}
            </Typography>
        <Typography variant="body2"> &nbsp; {`${spot.collected_hash.substr(0, 6)}...${spot.collected_hash.substr(-6)}`}</Typography>
          </Stack>
       
          <Divider />

       
        {typeCard[type]}

         

         
        </Stack>
      </CardContent>
    </Card>
  );
}
