import React from "react"
import { Card, CardHeader, CardMedia, Avatar, CardActions, IconButton, Badge} from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete'
import { Comment } from "@mui/icons-material";
import moment from "moment";

export default function card({avatar,name,image}) {
    const date = moment().format('LL');
    // const date = `${current.getMonth()+1} ${current.getDate()}, ${current.getFullYear()}`;
    return( 
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar= {<Avatar alt="Martha" src={avatar} />}
                title= {name}
                subheader={date}
            />
            <CardMedia
            style={{width:"250px"}}
                component="img"
                height="194"
                image={image}
                alt="Paella dish"
            />
            <CardActions>
                <IconButton aria-label="add to favorites">
                    <Badge badgeContent={2} color="secondary" sx={{ "& .MuiBadge-badge": { fontSize: 8, height: 15, minWidth: 15 } }}>
                        <FavoriteIcon />
                    </Badge>
                </IconButton>
                <IconButton aria-label="comment">
                    <Badge badgeContent={4} color="secondary" sx={{ "& .MuiBadge-badge": { fontSize: 8, height: 15, minWidth: 15 } }}>
                        <Comment />
                    </Badge>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton aria-label="delete" >
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}