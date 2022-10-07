import PropTypes from 'prop-types';
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
}) {
  const displayShipping = shipping !== null ? 'Free' : '-';


  const Card1 = () => {
    return(
        <>

            <Stack direction="row" justifyContent="space-between">             
                <Stack direction="column" justifyContent="space-between">
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                        Expected Bonus
                    </Typography>

                    <Stack direction="row">
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Next payment at: &nbsp;
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.primary' }}>
                        07/31/2022
                        </Typography> 
                    </Stack>
                        
                </Stack>
                <Typography variant="h4" sx={{ color: 'text.primary' }}>
                    $ 12
                </Typography> 
            </Stack>
            <Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {'Deposit Wallet : '  }{' '}
                    </Typography>
                    <Typography variant="body1"> &nbsp; D569776Y...323JG</Typography>
                </Stack>

                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {'ROI : '  }{' '}
                    </Typography>
                    <Typography variant="body1"> &nbsp; 10% - 13.5%</Typography>
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
                    <Typography variant="body1"> &nbsp; GOLD S&P 500</Typography>
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
                <Typography align='center' variant='h4'>06 / 12 / 2022 16:45 PM</Typography>
                <Typography align='center' variant='body2' sx={{ color: 'text.secondary' }}>Activation date</Typography>
            </Stack>
            <Stack direction="column" justifyContent='center'>
                <Typography align='center' variant='h4'>19 : 15 : 32 : 09</Typography>
                <Typography align='center' variant='body2' sx={{ color: 'text.secondary', }}>Time</Typography>
            </Stack>

            <Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {'Rentability : '  }{' '}
                    </Typography>
                    <Typography variant="body1"> &nbsp; 10% - 13.5%</Typography>
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
                    <Typography variant="body1"> &nbsp; GOLD S&P 500</Typography>
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
                        Deposit - 08/12/2002
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
                    <Typography variant="h4"  sx={{ color: 'text.primary' }}>{discount ? fCurrency(discount) : '$100 USDT'}</Typography>      
                </Stack>
                <Typography color={'success'} variant="h5" sx={{ color: 'green' }}>
                        ACTIVE
                    </Typography>
                
            </Stack>

            <Stack direction="row" justifyContent="flex-start">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {'Hash : '  }{' '}
            </Typography>
        <Typography variant="body2"> &nbsp; P24567HGGHAH...JHATFATGF22</Typography>
          </Stack>
       
          <Divider />

       
        {typeCard[type]}

         

         
        </Stack>
      </CardContent>
    </Card>
  );
}
