import React, { useEffect, useState } from 'react'
import {
    Grid,
    Typography,
  } from '@mui/material';

  // Hooks
import useLocales from '../../hooks/useLocales';

export default function Counterback() {
    const { translate } = useLocales()
    const [diff, setDiff] = useState(null)
    const [initial, setInitial] = useState(null)

    const tick = () => {
        setDiff(new Date(initial + 900800 - +new Date()))
    }
    const start = () => { setInitial(+new Date()) }

    useEffect(() => {
        start()
    }, [])
    useEffect(() => {
        if (initial) {
            requestAnimationFrame(tick)
        }
    }, [initial])

    useEffect(() => {
        if (diff) {
            requestAnimationFrame(tick)
        }
    }, [diff])

    const timeFormat = (date) => {
        if (!date) return "00:00:00"

        let mm = date.getUTCMinutes();
        let ss = date.getSeconds();

        mm = mm < 10 ? `0${  mm}` : mm;
        ss = ss < 10 ? `0${  ss}` : ss;

        return {minutes: mm, seconds: ss}
    }
    return (
        <>
            <Grid item sm={5.5}>
                <Typography variant="h3" textAlign="right">
                    {timeFormat(diff).minutes}
                </Typography>
                <Typography textAlign="right" variant="subtitle2" sx={{ color: 'text.disabled' }}>
                    {translate('dashboard.spot.minutes')}
                </Typography>
            </Grid>
            <Grid item sm={1}>
                <Typography variant="h3" textAlign="center">
                    :
                </Typography>
            </Grid>
            <Grid item sm={5.5}>
                <Typography variant="h3" textAlign="left">
                    {timeFormat(diff).seconds}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                    {translate('dashboard.spot.seconds')}
                </Typography>
            </Grid>
        </>
    )
}
