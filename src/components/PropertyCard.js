import React from "react";
import { Card, CardMedia, CardContent, CardActions, IconButton, Typography } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
import CropIcon from '@mui/icons-material/Crop';

const PropertyCard = ({data}) => {
    const {photos, price, address, bedrooms, bathrooms, livingArea} = data;
    return (
      <>
      <Card sx={{ maxWidth: 345, borderRadius:2 }}>
      <CardMedia
        component="img"
        height="194"
        image= {photos[0]}
        alt="property image"
      />

      <CardContent style={{textAlign: "left"}}>
        <Typography variant="h6" color="secondary" style = {{fontWeight:800, fontSize:20}}>
         ${price}K
        </Typography>
        <Typography variant="h6" color="text.primary" style = {{fontWeight:800, fontSize:16}}>
         {address.streetAddress.slice(0,100)}
        </Typography>
        <Typography variant="p" color="text.secondary">
         {address.city+", "+address.state}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton style={{fontSize:16}}>
          <BedIcon fontSize = "small"/>{" "+bedrooms}
        </IconButton>
        <IconButton style={{fontSize:16}}>
          <ShowerIcon fontSize = "small"/> {" "+bathrooms}
        </IconButton>
        <IconButton style={{fontSize:16}}>
          <CropIcon fontSize = "small"/> {" "+livingArea}
        </IconButton>
      </CardActions>    
    </Card>
      </>
    )
}

export default PropertyCard;