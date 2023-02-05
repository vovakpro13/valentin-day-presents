import React from 'react';
import {Gifts} from "../constants/gifts";
import GiftCard from "../components/GiftCard";
import {Box, Grid, Stack, Typography} from "@mui/material";

const MainPage = () => {
    return (
        <Stack p="20px 32px" gap="30px">
            <Typography gutterBottom variant="h4" sx={{fontSize:'30px'}}>
                💝ТОП-10 подарунків хлопцю на 14 лютого💝
                <Typography gutterBottom>
                    (за версією Мельника Володимира)
                </Typography>
                <Typography  variant="body2">
                    Описи згенерив chatGPT))😁😁
                </Typography>
            </Typography>

            <Box width="100%">
                <Grid container spacing={4}>
                    {Gifts.map((gift, i) => (
                        <Grid item xs={12} md={6} lg={4} xl={3}>
                            <GiftCard key={gift.name} place={i} {...gift} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Stack>
    )
};

export default MainPage;