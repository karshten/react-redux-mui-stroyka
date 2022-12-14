import React from 'react'
import { Grid, Box, Typography } from '@mui/material';
import { dark } from 'theme/colors';
import { PrimaryButton } from '../../components/Button/Button';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';

export const OrderProduct = ({ totalCount, totalPrice, items, createdAt, id }) => {
    const orderKeys = Object.keys(items)
    const orderDate = format(new Date(createdAt), "dd MMMM", { locale: ru })
    const navigate = useNavigate()

    return (
        <Box display='flex' sx={{ border: '1px solid #E8E9EA', mb: 2 }}>
            <Grid
                item
                xs={2}
                display='flex'
                alignItems='center'
                p={2}
                justifyContent='center' >
                <Box
                    sx={{ objectFit: 'cover' }}
                    maxHeight={120}
                    component='img'
                    maxWidth='100%'
                    src={items[orderKeys?.[0]].img} />
                {/* Object.keys(items).map((key) => {
                        return <Box
                            key={items[key].id}
                            sx={{ objectFit: 'cover' }}
                            maxHeight={120}
                            component='img'
                            maxWidth='50%'
                            src={items[key].img} />
                    }) */}
            </Grid>
            <Grid item xs={6}
                borderLeft='1px solid #E8E9EA'
                borderRight='1px solid #E8E9EA'
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 2,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 500,
                        fontSize: 16,
                        color: dark[600]
                    }}>
                    {orderKeys.map((key, idx, arr) => {
                        const addComa = arr.length - 1 !== idx ? "," : ""
                        return items[key].name + addComa
                    }).join('').slice(0, 100) + "..."}
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: 20,
                        color: dark[500]
                    }}>
                    {totalPrice} ???
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 500,
                        fontSize: 16,
                        color: dark[600]
                    }}>
                    {totalCount} {(orderKeys.length <= 1 ? "????" : "??????-????")}.
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 500,
                        fontSize: 16,
                        color: dark[600]
                    }}>
                    {orderKeys[1] && `${orderKeys.length} ???? ???????????????????? ??????????????????.`}
                </Typography>
            </Grid>
            <Grid item xs={2} p={2} >
                <Typography
                    sx={{
                        color: dark[600],
                        fontWeight: 700,
                        fontSize: '18px',
                    }}>
                    ?????????? ???? {orderDate}
                </Typography>
                <Typography sx={{
                    color: dark[600],
                    fontWeight: 400,
                    fontSize: '16px',
                }}>
                    34078988-0047
                </Typography>
            </Grid>
            <Grid item xs={2} p={2}>
                <Box>
                    <Typography sx={{
                        color: dark[600],
                        fontWeight: 700,
                        fontSize: '16px',
                    }}>
                        ????????????
                    </Typography>
                    <Typography sx={{
                        color: dark[600],
                        fontWeight: 400,
                        fontSize: '16px',
                    }}>
                        ??????????????
                    </Typography>
                </Box>
                {orderKeys.length > 1 &&
                    <PrimaryButton onClick={() => navigate(`/orders/${id}`)} sx={{ mt: 2 }}>??????????????????</PrimaryButton>
                }
            </Grid>
        </Box >
    )
}
