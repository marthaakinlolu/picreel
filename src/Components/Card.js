import React from "react"
import { Card, CardHeader, CardMedia, Avatar, CardActions, IconButton, Badge} from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Comment } from "@mui/icons-material";
import moment from "moment";

export default function card(props) {
    const date = moment().format('LL');
    // const date = `${current.getMonth()+1} ${current.getDate()}, ${current.getFullYear()}`;
    return( 
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar= {<Avatar alt="Martha" src={props.avatar} />}
                title= {props.name}
                subheader={date}
            />
            <CardMedia
                component="img"
                height="194"
                image={props.image}
                alt="Paella dish"
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Badge badgeContent={2} color="secondary">
                        <FavoriteIcon />
                    </Badge>
                </IconButton>
                <IconButton aria-label="comment">
                    <Badge badgeContent={4} color="secondary">
                        <Comment />
                    </Badge>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}