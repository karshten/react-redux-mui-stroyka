import React from 'react'
import { Grid, Typography, Box, List, ListItem } from '@mui/material';
import { dark } from 'theme/colors';
import arrowRight from "icons/arrow-right-16.svg"
import { KeyBoard } from './../../components/AlphabetList/KeyBoard';

export const CatalogItem = ({ catalogItems }) => {
    return (
        <>
            <Grid item xs={3}>
                <Box sx={{
                    backgroundColor: '#F6F6F6',
                    textAlign: 'center',
                    width: '180px',
                    height: '180px',
                    overflow: 'hidden'
                }}>
                    <Typography sx={{
                        fontWeight: 500,
                        fontSize: '18px',
                        color: dark[600],
                        p: '12px',
                    }}>
                        {catalogItems.title}
                    </Typography>
                    <Box
                        component='img'
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                        src={catalogItems.img} />
                </Box>
                <List>
                    {catalogItems.items.map((item) => (
                        <ListItem key={item} sx={{ pl: 0 }}>
                            <Typography sx={{
                                fontWeight: 500,
                                fontSize: '16px',
                                color: dark[600],
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                '&:hover img': {
                                    display: 'block',
                                    mr: 1
                                }
                            }}>
                                <Box component='img' sx={{ display: 'none' }} src={arrowRight} />
                                {item}
                            </Typography>
                        </ListItem>
                    ))}

                </List>
            </Grid>
        </>
    )
}
