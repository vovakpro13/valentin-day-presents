import React from 'react';
import {Avatar, Badge, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";

const GiftCard = ({place, photo, name, description, isExpensive, sub, link}) => {
    return (
        <Badge
            componentsProps={{
                badge: {
                    sx: {right: '30px', p: "10px"}
                }
            }}
            color={
                isExpensive
                    ? "secondary"
                    : "primary"}
            badgeContent={
                <Typography>
                    {isExpensive ? "Дорого" : "Дешево"}
                </Typography>
            }


        >
            <Card sx={{maxWidth: "100%"}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor: "white"}} aria-label="recipe">
                            {place + 1}
                        </Avatar>
                    }
                    subheader={sub}
                    title={

                        <Typography variant="h6">
                            {name}
                        </Typography>
                    }
                />
                <CardMedia
                    component="img"
                    height="190"
                    image={photo}

                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href={link} target="_blank">
                        <Button size="small" color="primary">
                            Знайти в Google
                        </Button>
                    </a>
                </CardActions>
            </Card>
        </Badge>
    );
};

export default GiftCard;