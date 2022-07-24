import React from "react"
import { Card, CardHeader, CardMedia, Avatar, CardActions, IconButton} from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import img from "../Images/avatar.jpg"


export default function card() {
    return( 
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar= {<Avatar alt="Martha" src={img} />}
                title= "Martha Akinlolu"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={img}
                alt="Paella dish"
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}