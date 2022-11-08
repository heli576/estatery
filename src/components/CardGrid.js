import React from "react";
import properties from "../items.json";
import PropertyCard from "./PropertyCard";
import Grid from '@mui/material/Grid';

const CardGrid = () => {
    return (
        <>
        <Grid container spacing={2} mt={4}>
        {properties&&properties.slice(0,10).map((p, i)=>(
            <Grid item md = {3} xs={12}>
        <PropertyCard key = {i} data = {p}/>
        </Grid>
      ))}
</Grid>
      
      </>
    );
}

export default CardGrid;