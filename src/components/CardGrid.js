import React from "react";
import properties from "../items.json";
import PropertyCard from "./PropertyCard";
import Grid from '@mui/material/Grid';

const CardGrid = ({filters}) => {
    const { homeStatus, location, price, when, propertyType} = filters;
    let minPrice, maxPrice;
    if(price==="Above 7000K"){
        minPrice = 7000;
        maxPrice = 1500000;
    }else{
        minPrice = price.substring(0,price.indexOf('-'));
        maxPrice = price.substring(price.indexOf('-')+1,price.indexOf('K'));
    }

    return (
        <>
        <Grid container spacing={2} mt={4}>
        {properties&&properties.filter((p)=> p.homeStatus===homeStatus&&p.address.city===location&&p.price>=minPrice&&p.price<maxPrice&&p.homeType===propertyType&&new Date(when)>=new Date(p.datePostedString)).length>0?properties.filter((p)=> p.homeStatus===homeStatus&&p.address.city===location&&p.price>=minPrice&&p.price<maxPrice&&p.homeType===propertyType&&new Date(when)>=new Date(p.datePostedString)).map((p, i)=>(
            <Grid item md = {3} xs={12}>
        <PropertyCard key = {i} data = {p}/>
        </Grid>
      )):(<div style={{textAlign:"center"}}><h2>No property found</h2></div>)}
</Grid>
      
      </>
    );
}

export default CardGrid;