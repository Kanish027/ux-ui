import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Feed = () => {
  return (
    <Box  flex={4} p={2}>
      <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="July 14, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://www.tastingtable.com/img/gallery/classic-seafood-paella-recipe/l-intro-1640888240.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
        </IconButton>
        <ShareIcon/>
      </CardActions>
      
    </Card>
    <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="July 14, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.indianexpress.com/2023/07/chandrayaan-3-launch-20230628.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
        </IconButton>
        <ShareIcon/>
      </CardActions>
      
    </Card>
    <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="July 14, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.indianexpress.com/2022/05/Modi-17.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
        </IconButton>
        <ShareIcon/>
      </CardActions>
      
    </Card>
    <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="July 10, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://www.koimoi.com/wp-content/new-galleries/2022/02/shark-tank-indias-ashneer-grovers-18000-square-feet-delhi-mansion-screams-royalty-step-inside-his-luxurious-lifestyle-001.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
        </IconButton>
        <ShareIcon/>
      </CardActions>
      
    </Card>
    <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="July 10, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202304/f7j6hnt4brnuxnqb3ose6lxafm-sixteen_nine.jpg?size=948:533"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
        </IconButton>
        <ShareIcon/>
      </CardActions>
      
    </Card>
    <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="July 9, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.indianexpress.com/2023/06/puneet-superstar-1200.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
        </IconButton>
        <ShareIcon/>
      </CardActions>
      
    </Card>
    </Box>
  )
}

export default Feed
